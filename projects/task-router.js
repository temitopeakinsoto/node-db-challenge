const express = require("express");

const tasks = require("./project-model.js");

const router = express.Router();

//middleware for validating task ID
function validateTaskById(req, res, next) {
  const id = req.params.id;
  tasks
    .getTasksById(id)
    .then(task => {
      if (task) {
        req.task = task;
        next();
      } else {
        res
          .status(400)
          .json({ message: `There is no task with the specified task ID ` });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: `There was an error retrieving the task: ${err.message}`
        });
    });
}

router.get("/", (req, res) => {
  tasks
    .getTasks()
    .then(tasks => {
      const displayTasks = tasks.map(task => {
        return { ...task, task_status: task.task_status === 1 ? true : false };
      });
      return res.json(displayTasks);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not retrieve tasks from the server" + err.message
      });
    });
});

router.get("/:id", validateTaskById, (req, res) => {
  try {
    res.status(200).json(req.task);
  } catch (err) {
    res
      .status(500)
      .json({ message: `There was an error with this request ${err.message}` });
  }
});

router.post("/", (req, res) => {
  const taskBody = req.body;
  tasks
    .addTask(taskBody)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        error: "Could not create new task in the database" + err.message
      });
    });
});

module.exports = router;

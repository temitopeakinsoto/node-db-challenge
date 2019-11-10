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
      res.status(500).json({
        message: `There was an error retrieving the task: ${err.message}`
      });
    });
}

function validateTaskPost(req, res, next) {
  const taskPost = req.body;
  if (!taskPost) {
    res.status(400).json({ message: `Task must have required fields` });
  } else if (!taskPost.task_description) {
    res
      .status(400)
      .json({ message: `Task must have a task_description field` });
  } else if (!taskPost.task_status) {
    res.status(400).json({ message: `Task must have a task_status field` });
  } else if (!taskPost.project_id) {
    res
      .status(400)
      .json({ message: "Task must have an associated project Id" });
  } else {
    req.task = taskPost;
    next();
  }
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

router.post("/", validateTaskPost, (req, res) => {
  const taskBody = req.task;
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

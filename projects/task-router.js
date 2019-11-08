const express = require("express");

const tasks = require("./project-model.js");

const router = express.Router();

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

router.post("/", (req, res) => {
  const taskBody = req.body;
  tasks
    .addTask(taskBody)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          error: "Could not create new task in the database" + err.message
        });
    });
});

module.exports = router;
const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
  .then(projects => {
    res.status(200).json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects list from the database' });
  });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;  
    Projects.getProjectById(id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({ message: 'Could not find any project with specified project id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: `Something went wrong while trying to get this project: ${err.message}` });
    });
  });


module.exports = router;
const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

function validateProjectId(req, res, next){
  const id = req.params.id;
  Projects.getProjectById(id)
  .then(project => {
    if(project){
      req.project = project;
      next();
    }else{
      res
        .status(400)
          .json({message: "There is no project with the specified ID"})
    }
  })
  .catch(err => {
    res.status(500).json({message: `There was an error with retrieving the project ${err.message}`})
  })
}

router.get('/', (req, res) => {
    Projects.getProjects()
  .then(projects => {
    const displayProjects = projects.map(project => {
      return { ...project, project_status: project.project_status === 1 ? true : false };
    });
    res.status(200).json(displayProjects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects list from the database' });
  });
});

router.get('/:id', validateProjectId, (req, res) => {
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

  router.post("/", (req, res) => {
    const projectBody = req.body;
    Projects
      .addProjects(projectBody)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "Could not create project this in the database" + err.message });
      });
  });

module.exports = router;
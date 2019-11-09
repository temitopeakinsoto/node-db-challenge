const express = require("express");

const resources = require("./project-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  resources
    .getResource()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Could not retrieve resources from the Server" });
    });
});

router.post("/", (req, res) => {
  const resourceBody = req.body;
  resources
    .addResource(resourceBody)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Could not create resource this in the database" + err.message });
    });
});

module.exports = router;
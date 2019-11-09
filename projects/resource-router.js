const express = require("express");

const resources = require("./project-model.js");

const router = express.Router();

function validateResourceId(req, res, next){
    const id = req.params.id;
    resources.getResourceById(id)
    .then(resource => {
        if(resource){
            req.resourceItem = resource;
            next();
        }else {
            res.status(400).json({
                message: "There is no resource with this resource Id"
            })
        }
    })
    .catch(error => {
        res.status(400).json({ 
            message: `There was an error retrieving the resource with this resource Id: ${error.message}`
        })
    });
}

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

router.get('/:id', validateResourceId, (req, res) => {
    try {
        res.status(200).json(req.resourceItem);
    }catch(error){
        res.status(500).json({message: `There was an error retrieving this resource`});
    }
})

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
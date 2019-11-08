const db = require("../data/db-config");

module.exports = {
    getProjects,
    getProjectById
};

function getProjects() {
  return db("projects as p")
  .select("p.id", "p.project_name", "p.project_description", "p.project_status");
}

function getProjectById(projectId){
  return db("projects as p")
  .select("p.id", "p.project_name", "p.project_description", "p.project_status")
  .where({ "p.id": projectId });
}









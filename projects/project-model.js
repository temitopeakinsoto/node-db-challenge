const db = require("../data/db-config");

module.exports = {
    getProjects
};

function getProjects() {
  return db("projects as p")
  .select("p.id", "p.project_name", "p.project_description", "p.project_status");
}









const db = require("../data/db-config");

module.exports = {
    getProjects,
    addProjects,
    getProjectById,
    getTasks,
    addTask,
    getTasksById,
    getResource,
    getResourceById,
    addResource
  };

function getProjects() {
  return db("projects");
}

function addProjects(project) {
  return db("projects")
    .insert(project);
}

function getProjectById(projectId){
  return db("projects as p").first()
  .select("p.id", "p.project_name", "p.project_description", "p.project_status")
  .where({ "p.id": projectId });
}

function getTasks() {
  return db("tasks as t ")
    .join("projects as p ", "t.project_id", "=", "p.id")
    .select(
      "t.id",
      "p.project_name",
      "p.project_description",
      "t.task_description",
      "t.task_notes",
      "t.task_status",
      "t.project_id"
    );
}

function addTask(tasks) {
  return db("tasks")
    .insert(tasks)
    .then(id => {
      return getTasksById(id[0]);
    });
}

function getTasksById(id) {
  return db("tasks")
    .where("id", id)
    .first();
}

function getResource() {
  return db("resources");
}

function getResourceById(id) {
  return db("resources")
    .where("id", id)
    .first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      return getResourceById(id[0]);
    });
}

// function trueOrFalse(tf) {
//   return tf === 1 ? true : false;
// }

// function body(item) {
//   return { ...item, project_status: trueOrFalse(item.project_status) };
// }








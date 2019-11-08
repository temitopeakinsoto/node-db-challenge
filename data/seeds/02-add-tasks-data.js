
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: "Sign A contract with Julius Berger", 
          task_notes: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          task_status: 1,
          project_id: 1
        },
        {
          task_description: "Get Tractors and materials", 
          task_notes: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          task_status: 0,
          project_id: 1
        },
        {
          task_description: "Organize youths to work on project", 
          task_notes: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          task_status: 1,
          project_id: 1
        },
        {
          task_description: "Start actual building of roads", 
          task_notes: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          task_status: 0,
          project_id: 1
        },
        {
          task_description: "complete the road and commission it", 
          task_notes: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          task_status: 0,
          project_id: 1
        },
        {
          task_description: "Sign a contract with Indian equipments manufacturers", 
          task_notes: "Sign a contract with Indian equipments manufacturers the equipments project for the purchase of state-of-the-art hospital equipments.", 
          task_status: 1,
          project_id: 2
        },
        {
          task_description: "Import Equipements from India", 
          task_notes: "Import Equipements from India the equipments project for the purchase of state-of-the-art hospital equipments.", 
          task_status: 0,
          project_id: 2
        },
        {
          task_description: "Set up and commission the equipments", 
          task_notes: "Set up and commission the equipments project for the purchase of state-of-the-art hospital equipments.", 
          task_status: 0,
          project_id: 2
        }
      ]);
    });
};

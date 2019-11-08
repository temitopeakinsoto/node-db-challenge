exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        { 
          task_description: "Mark the proposed building sites", 
          task_notes: "speak to the head teacher", 
          task_status: "true" ,
          project_id: 1
        },
        { 
          task_description: "purchase cements and fabricated bricks", 
          task_notes: "pay merchants", 
          task_status: "false" ,
          project_id: 1
        },
        { 
          task_description: "get engineers on site", 
          task_notes: "prepare their daily pay", 
          task_status: "false" ,
          project_id: 1
        },
        { 
          task_description: "start building", 
          task_notes: "prepare a duration of construction", 
          task_status: "false" ,
          project_id: 1
        },
        { 
          task_description: "clone repo from git hub", 
          task_notes: "navigate to desired folder and clone repo", 
          task_status: "true" ,
          project_id: 2
        },
        { 
          task_description: "Fire project using VScode", 
          task_notes: "download and install visual Studio Code", 
          task_status: "true" ,
          project_id: 2
        },
        { 
          task_description: "install dependencies", 
          task_notes: "install dependencies using npm or yarn", 
          task_status: "false" ,
          project_id: 2
        },
        { 
          task_description: "attempt", 
          task_notes: "attempt the sprint using all you learned during the week", 
          task_status: "false" ,
          project_id: 2
        },
      ]);
    });
};
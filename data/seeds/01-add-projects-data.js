exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        { 
          project_name: "School Library", 
          project_description: "Proposed site to construct a school library", 
          project_status: 0 
        },
        { 
          project_name: "Lambda School Sprints", 
          project_description: "Complete the db sprint challenge in 3 hours", 
          project_status: 0 
        },
      
        
      ]);
    });
};

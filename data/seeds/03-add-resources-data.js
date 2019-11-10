exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        { 
          resource_name: "cement", 
          resource_description: "12 bags", 
        },
        { 
          resource_name: "dependencies", 
          resource_description: "npm install dependencies", 
        },
        { 
          resource_name: "employ engineers", 
          resource_description: "check out their projects and choose your team", 
        },
        { 
          resource_name: "git hub", 
          resource_description: "to get access to sprint", 
        },
        { 
          resource_name: "laptop", 
          resource_description: "a functional laptop is required", 
        },
        
      ]);
    });
};

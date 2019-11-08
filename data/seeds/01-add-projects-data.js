
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: "Lagos-ABK Road", 
          project_description: "This is a project for the construction of the Lagos-Abeokuta Express road", 
          project_status: 0
        },
        {
          project_name: "Purchase of Equipments", 
          project_description: "This is a project for the purchase of state-of-the-art hospital equipments", 
          project_status: 1
        },
        {
          project_name: "Pipe Borne water", 
          project_description: "This is a project for distribution of pipe-borne water all accross the state of Lagos", 
          project_status: 0
        },
        {
          project_name: "Ultra-modern Market", 
          project_description: "This is a project for the construction of an ultra modern market", 
          project_status: 0
        }
      ]);
    });
};

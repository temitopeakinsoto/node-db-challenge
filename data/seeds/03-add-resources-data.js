
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          resource_name: "money", 
          resource_description: 'Money needed for the kick-off of project'
        },
        {
          resource_name: "500 young able-bodied men", 
          resource_description: '500 young able-bodied men needed for the completion of project'
        },
        {
          resource_name: "water", 
          resource_description: 'water needed for the completion of project'
        },
        {
          resource_name: "Microscopes", 
          resource_description: 'Microscopes needed for medical purposes'
        },
        {
          resource_name: "Scissors", 
          resource_description: 'Scissors needed for the commissioning of project'
        },
        {
          resource_name: "Sounds System", 
          resource_description: 'Sounds System needed for the kick-off of and sign-off of project'
        }        
        
      ]);
    });
};

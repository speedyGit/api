
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'RomanSL',password:'password',email:'roman@roman1',role_id:1},
        {username: 'RomanTL',password:'password',email:'roman@roman2',role_id:2},
      ]);
    });
};

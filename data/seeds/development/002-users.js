
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'RomanSL',password:'password',email:'roman@roman1',role_id:1},
        {username: 'RomanTL',password:'password',email:'roman@roman2',role_id:2},
        {username: 'RomanSL1',password:'password',email:'roman@roman12',role_id:1},
        {username: 'RomanTL2',password:'password',email:'roman@roman23',role_id:2},
        {username: 'RomanSL3',password:'password',email:'roman@roman14',role_id:1},
        {username: 'RomanTL4',password:'password',email:'roman@roman25',role_id:2},
        {username: 'RomanSL5',password:'password',email:'roman@roman16',role_id:1},
        {username: 'RomanTL6',password:'password',email:'roman@roman27',role_id:2},
        {username: 'RomanSL7',password:'password',email:'roman@roman17',role_id:1},
        {username: 'RomanTL8',password:'password',email:'roman@roman28',role_id:2},
        {username: 'RomanSL9',password:'password',email:'roman@roman19',role_id:1},
        {username: 'RomanTL0',password:'password',email:'roman@roman20',role_id:2},
        {username: 'RomanSL11',password:'password',email:'roman@roman111',role_id:1},
        {username: 'RomanTL12',password:'password',email:'roman@roman212',role_id:2},
      ]);
    });
};

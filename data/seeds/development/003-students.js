
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan1'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan2'}
      ]);
    });
};

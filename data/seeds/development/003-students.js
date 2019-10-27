
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan1'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan2'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan21'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan22'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan23'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan24'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan5'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan16'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan27'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan28'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan29'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan20'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan211'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan12'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan113'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan214'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan216'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan215'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan218'},
        {fname:'roman',lname:'jordan',slack_handle:'@roman-jordan',git_handle:'Roman-jordan219'},
      ]);
    });
};

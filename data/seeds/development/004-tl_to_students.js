
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tl_to_students').del()
    .then(function () {
      // Inserts seed entries
      return knex('tl_to_students').insert([
        {tl_id:1,student_id:1},
        {tl_id:1,student_id:2},
      ]);
    });
};

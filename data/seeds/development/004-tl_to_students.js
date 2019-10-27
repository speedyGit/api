
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tl_to_students').del()
    .then(function () {
      // Inserts seed entries
      return knex('tl_to_students').insert([
        {tl_id:1,student_id:1},
        {tl_id:2,student_id:2},
        {tl_id:3,student_id:3},
        {tl_id:1,student_id:4},
        {tl_id:3,student_id:5},
        {tl_id:4,student_id:6},
        {tl_id:5,student_id:7},
        {tl_id:8,student_id:8},
        {tl_id:7,student_id:9},
        {tl_id:2,student_id:0},
      ]);
    });
};

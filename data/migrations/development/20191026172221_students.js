exports.up = function(knex) {
  return knex.schema
  .createTable("students", col => {
      col.increments();
      col.string("fname", 20);
      col.string("lname", 20);
      col.string("slack_handle", 20);
      col
        .string("git_handle", 28)
        .unique()
        .notNullable();
    }).createTable('tl_to_students',col=>{
      col.increments()
      col
        .integer('tl_id')
        .unsigned()
        .references('id')
        .inTable('users')
      col
        .integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
      col.unique(['tl_id','student_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tl_to_students')
    .dropTableIfExists('students')
};

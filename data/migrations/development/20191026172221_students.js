exports.up = function(knex) {
  return knex.schema
  .createTable("students", col => {
      col.increments();
      col.string("fname", 20);
      col.string("lname", 20);
      col.string("slack_handel", 20);
      col
        .string("gitHandle", 28)
        .unique()
        .notNullable();
      col
        .integer('tl_id')
        .unsigned()
        .references('id')
        .inTable('users')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('students')
};

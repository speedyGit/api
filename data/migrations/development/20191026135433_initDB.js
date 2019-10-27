
exports.up = function(knex) {
  return knex.schema

  .createTable('users',col=>{
      col
        .increments()
      col
        .string('username',50)
        .index()
        .notNullable()
        .unique()
      col
        .string('password',200)
        .notNullable()
      col
        .integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
  })
  .createTable('roles',col=>{
    col
        .increments()
    col
        .string('role',8)
        .unique()
        .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('roles')
  .dropTableIfExists('users')
};

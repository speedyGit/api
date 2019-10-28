
exports.up = function(knex) {
  return knex.schema.createTable('tl_repo_reviews', col=>{
      col.increments()
      col
        .integer('tl_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
      col
        .integer('student_id')
        .unsigned()
        .references('student_id')
        .inTable('repo_stats')
        .notNullable()
      col
        .integer('stars',1)
        .notNullable()
      col
        .string('description',500)
        .notNullable()
  })
};

exports.down = function(knex) {
  return  knex.schema.dropTableIfExists('tl_repo_reviews')
};


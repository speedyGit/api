
exports.up = function(knex) {
  return knex.schema.createTable('repo_stats', col=>{
      col.increments()
      col
        .integer('repo_id',20)
        .unsigned()
        .references('id')
        .inTable('repo_list')
      col
        .integer('student_id',20)
        .unsigned()
        .references('id')
        .inTable('students')
      col
        .integer('commits',5)
      col
        .timestamp('last_updated')
      col
        .string('build_location',128)
  })
};

exports.down = function(knex) {
  
};


exports.up = function(knex) {
    knex.schema.createTable('repo_list',col =>{
        col.increments()
        col.string('repo_name',128)
    })
};

exports.down = function(knex) {
    knex.schema
    .dropTableIfExists('repo_list')
};

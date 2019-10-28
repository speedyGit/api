
exports.up = function(knex) {
    return knex.schema.createTable('repo_list',col =>{
        col.increments()
        col.string('repo_name',128)
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('repo_list')
};

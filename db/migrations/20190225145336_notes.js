
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes',function(tbl){
        tbl.increments('id');
        tbl.string('title',50).notNullable().unique();
        tbl.string('textBody').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('notes');
};

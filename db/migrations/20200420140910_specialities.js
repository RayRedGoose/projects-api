exports.up = function(knex) {
  return knex.schema
    .createTable('specialities', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('field_id').unsigned();
      table.foreign('field_id')
        .references('fields.id');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('specialities');
};

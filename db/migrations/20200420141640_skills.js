exports.up = function(knex) {
  return knex.schema
    .createTable('skills', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('skills');
};

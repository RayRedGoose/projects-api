exports.up = function(knex) {
  return knex.schema
    .createTable('projects', function (table) {
      table.increments('id').primary();
      table.string('author');
      table.string('authorLogo');
      table.string('company');
      table.string('companyLogo');
      table.string('title');
      table.string('description');
      table.string('budget');
      table.string('due');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('projects');
};

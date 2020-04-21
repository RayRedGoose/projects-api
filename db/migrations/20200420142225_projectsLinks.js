exports.up = function(knex) {
  return knex.schema
    .createTable('projectsLinks', function (table) {
      table.integer('project_id').unsigned();
      table.foreign('project_id')
        .references('projects.id');
      table.string('linkType');
      table.string('link');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('projectsLinks');
};

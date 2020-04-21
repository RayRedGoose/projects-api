exports.up = function(knex) {
  return knex.schema
    .createTable('positions', function (table) {
      table.increments('id').primary();
      table.integer('speciality_id').unsigned();
      table.foreign('speciality_id')
        .references('specialities.id');
      table.integer('project_id').unsigned();
      table.foreign('project_id')
        .references('projects.id');
      table.string('reward');
      table.string('rewardType');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('positions');
};

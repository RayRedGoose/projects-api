exports.up = function(knex) {
  return knex.schema
    .createTable('positionSkills', function (table) {
      table.integer('position_id').unsigned();
      table.foreign('position_id')
        .references('positions.id');
      table.integer('skill_id').unsigned();
      table.foreign('skill_id')
        .references('skills.id');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('positionSkills');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('profiles', (table) => {
  table.increments('id');

  table.string('name').notNullable();
  table.string('username').notNullable();
  table.string('password').notNullable();
  table.string('avatar_url').nullable();

  table.timestamps();
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('profiles');

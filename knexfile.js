const path = require('path');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
      name: 'knex_migrations',
    },
  },
};

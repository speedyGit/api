// Update with your config settings.
const ENV = process.env.DB_ENV || "development";
const migrate = `./data/migrations/${ENV}`;
const seed = `./data/seeds/${ENV}`;

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault:true,
    connection: {
      filename: "./data/dev.sqlite3"
    },
    migrations: {
      directory: migrate
    },
    seeds: {
      directory: seed
    },
    debug:true
  },

  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL_STAGING,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: migrate
    },
    seeds: {
      directory: seed
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: migrate
    },
    seeds: {
      directory: seed
    }
  }
};

'use strict';

const pg_host = process.env.POSTGRES_HOST;
const pg_port = process.env.POSTGRES_PORT || 5432;
const pg_db   = process.env.DB_GRAPHQL_DATABASE;
const pg_user = process.env.DB_GRAPHQL_USER;
const pg_pass = process.env.DB_GRAPHQL_PASSWORD;

module.exports = {
  development: {
    username: pg_user,
    password: pg_pass,
    database: pg_db,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres',
    define: {
      paranoid: false,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  },
  test: {
    username: pg_user,
    password: pg_pass,
    database: pg_db,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres',
    define: {
      paranoid: false,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  },
  production: {
    username: pg_user,
    password: pg_pass,
    database: pg_db,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres',
    define: {
      paranoid: false,
      timestamps: true,
      freezeTableName: true,
      underscored: true
    }
  },
};

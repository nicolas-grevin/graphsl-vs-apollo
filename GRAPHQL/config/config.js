'use strict';

const pg_host = process.env.POSTGRES_HOST;
const pg_port = process.env.POSTGRES_PORT || 5432;
const pg_db   = process.env.POSTGRES_DB;
const pg_user = process.env.POSTGRES_USER;
const pg_pass = process.env.POSTGRES_PASSWORD;

module.exports = {
  development: {
    username: pg_user,
    password: pg_pass,
    database: `${pg_db}-graphql-dev`,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres'
  },
  test: {
    username: pg_user,
    password: pg_pass,
    database: `${pg_db}-graphql-test`,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres'
  },
  production: {
    username: pg_user,
    password: pg_pass,
    database: `${pg_db}-graphql-prod`,
    host: pg_host,
    port: pg_port,
    dialect: 'postgres'
  },
};

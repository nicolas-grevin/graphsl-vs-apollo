import express from 'express';
import bodyParser from 'body-parser';
import GraphHTTP from 'express-graphql';
import cros from 'cors';
import chalk from 'chalk';
import mongoose from 'mongoose';

import schema from './graphql';
import models from './postgres/models';

const success = chalk.bold.cyan;
const waring = chalk.bold.yellow;
const error = chalk.bold.red;
const info = chalk.bold.magenta;

const mongo = () => {
  const dbURL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT_DOCKER}/admin`;

  mongoose.connect(dbURL, { useNewUrlParser: true });
  mongoose.connection.on('connected', () => console.log(success(`Mongoose default connection is open to ${dbURL}`)));
  mongoose.connection.on('error', err => console.log(error(`Mongoose default connection has occured ${err} error`)));
  mongoose.connection.on('disconnected', () => console.log(waring('Mongoose default connection is disconnected')))
  process.on('SIGINT', () => mongoose.connection.close(() => {
    console.log(info('Mongoose default connection is disconnected due to application termination'))
    process.exit(0)
  }));
};

const run = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cros());
  app.use('/graphql', GraphHTTP(request => ({
    schema,
    context: { data: request },
    pretty: true,
    graphiql: true,
  })));

  app
    .listen(process.env.PORT_GRAPHQL, () => {
      // eslint-disable-next-line no-console
      console.log(success(`INFO: Server is run to http://localhost:${process.env.PORT_GRAPHQL}/graphiql`));
    });
};



models.sequelize
  .sync()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(success('INFO: Connected to Postgres'));

    mongo();
    run();
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(error('ERROR: connection to postgres has failed'));
    throw err;
  });


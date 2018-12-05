import express from 'express';
import bodyParser from 'body-parser';
import GraphHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';
import models from './postgres/models';

const app = express();

async function run() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/graphql', GraphHTTP(request => ({
    schema,
    context: { data: request },
    pretty: true,
    graphiql: true,
  })));

  mongoose.set('debug', process.env.NODE_ENV === 'development');
  await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`, { useNewUrlParser: true });
  console.log('\x1b[32m%s\x1b[0m', 'INFO: Connected to mongo')

  models.sequelize
    .sync()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('\x1b[32m%s\x1b[0m', 'INFO: Connected to Postgres');
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('\x1b[41m%s\x1b[0m', 'ERROR: connection to postgres has failed');
      throw err;
    });

  app
    .listen(4441, () => {
      // eslint-disable-next-line no-console
      console.log('\x1b[32m%s\x1b[0m', 'INFO: Server is run to http://localhost:4441/graphiql');
    });
}

run();

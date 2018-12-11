import express from 'express';
import bodyParser from 'body-parser';
import GraphHTTP from 'express-graphql';
import cros from 'cors';

import schema from './graphql';
import models from './postgres/models';

import './mongo';

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

models.sequelize
  .sync()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('\x1b[32m%s\x1b[0m', 'INFO: Connected to Postgres');


    app
      .listen(process.env.PORT_GRAPHQL, () => {
        // eslint-disable-next-line no-console
        console.log('\x1b[32m%s\x1b[0m', `INFO: Server is run to http://localhost:${process.env.PORT_GRAPHQL}/graphiql`);
      });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('\x1b[41m%s\x1b[0m', 'ERROR: connection to postgres has failed');
    throw err;
  });


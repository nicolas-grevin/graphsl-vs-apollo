import express from 'express';
import bodyParser from 'body-parser';
import GraphHTTP from 'express-graphql';

import schema from './graphql';
import models from './models';

const app = express();

models.sequelize.sync()
    .then(() => {
        app.listen(4441, () => {
            // eslint-disable-next-line no-console
            console.log('Go to http://localhost:4441/graphiql to run queries!');
        });
    })
    .catch((e) => {
        throw new Error(e);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/graphql', GraphHTTP(request => ({
    schema,
    context: { data: request },
    pretty: true,
    graphiql: true,
})));

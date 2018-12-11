import mongoose from 'mongoose';
import chalk from 'chalk';

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;


const dbURL = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT_DOCKER}/admin`;

mongoose.connect(dbURL, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log(connected(`Mongoose default connection is open to ${dbURL}`)));

mongoose.connection.on('error', err => console.log(error(`Mongoose default connection has occured ${err} error`)));

mongoose.connection.on('disconnected', () => console.log(disconnected('Mongoose default connection is disconnected')))

process.on('SIGINT', () => mongoose.connection.close(() => {
  console.log(termination('Mongoose default connection is disconnected due to application termination'))
  process.exit(0)
}));


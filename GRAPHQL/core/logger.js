import { createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import config from '../config/logs';

if (!fs.existsSync(config.logFileDir)) {
  fs.mkdirSync(config.logFileDir);
}
const logger = createLogger({
  level: 'info',
  transports: [
    new transports.Console({
      colorize: true,
    }),
    new DailyRotateFile({
      filename: config.logFileName,
      dirname: config.logFileDir,
      maxSize: 20971520,
      maxFiles: 25,
      datePattern: 'DD-MM.YYYY'
    })
  ]
});

export default logger;

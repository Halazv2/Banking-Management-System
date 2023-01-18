import {createLogger, format, transports} from "winston";
import ConsoleLoggerTransport from "./config/winston-console-transport";

const logTransports = [
  new transports.File({
    level: "error",
    filename: "./logs/error.log",
    format: format.json({
      replacer: (key, value) => {
        if (key === "error") {
          return {
            message: (value as Error).message,
            stack: (value as Error).stack,
          };
        }
        return value;
      },
    }),
  }),
  new ConsoleLoggerTransport(),
];

/** is used to log messages in the application
  * it is used in the following way:
  * logger.log({level: "info", message: "message to log", error: err});
  * logger.log({level: "error", message: "message to log", error: err});
  * logger.log({level: "warn", message: "message to log", error: err});
  * logger.log({level: "debug", message: "message to log", error: err});
  * logger.log({level: "silly", message: "message to log", error: err});
  * logger.log({level: "verbose", message: "message to log", error: err});
 . */
const logger = createLogger({
  format: format.combine(format.timestamp()),
  transports: logTransports,
  defaultMeta: {service: "api"},
  level: process.env.NODE_ENV === "development" ? "silly" : "info",
});

export default logger;

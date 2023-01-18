/* eslint-disable import/first */
import dotenv from "dotenv";

const result = dotenv.config();
if (result.error) {
  dotenv.config({path: ".env.default"});
}

import util from "util";
import app from "./app";
import logger from "./logger";
import SafeMongooseConnection from "./config/db";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!!! shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;

let debugCallback;

const safeMongooseConnection = new SafeMongooseConnection({
  mongoUrl: process.env.MONGO_URL ?? "",
  debugCallback,
  onStartConnection: (mongoUrl) => logger.info(`Connecting to MongoDB at ${mongoUrl}`),
  onConnectionError: (error, mongoUrl) =>
    logger.log({
      level: "error",
      message: `Could not connect to MongoDB at ${mongoUrl}`,
      error,
    }),
  onConnectionRetry: (mongoUrl) => logger.info(`Retrying to MongoDB at ${mongoUrl}`),
});

const serve = () =>
  app.listen(PORT, () => {
    logger.info(`🌏 Express server started at http://localhost:${PORT}`);
    if (process.env.NODE_ENV === "development") {
      // This route is only present in development mode
      logger.info(`⚙️  Swagger UI hosted at http://localhost:${PORT}/dev/api-docs`);
    }
  });

if (process.env.MONGO_URL == null) {
  logger.error("MONGO_URL not specified in environment", new Error("MONGO_URL not specified in environment"));
  process.exit(1);
} else {
  safeMongooseConnection.connect((mongoUrl) => {
    logger.info(`Connected to MongoDB at ${mongoUrl}`);
    serve();
  });
}

// Close the Mongoose connection, when receiving SIGINT
process.on("SIGINT", () => {
  console.log("\n"); /* eslint-disable-line */
  logger.info("Gracefully shutting down");
  logger.info("Closing the MongoDB connection");
  safeMongooseConnection.close((err) => {
    if (err) {
      logger.log({
        level: "error",
        message: "Error shutting closing mongo connection",
        error: err,
      });
    } else {
      logger.info("Mongo connection closed successfully");
    }
    process.exit(0);
  }, true);
});

/* A handler for unhandled promise rejections. */
// process.on("unhandledRejection", (err: Error) => {
//   logger.log({
//     level: "error",
//     message: "Unhandled Rejection at Promise",
//     error: err,
//   }); 
// });

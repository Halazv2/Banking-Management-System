import Transport from "winston-transport";

/**
 * https://stackoverflow.com/a/41407246
 * Log level escpace codes
 */
/* A map of the log levels to the color codes. */
const levelStyleMap: {[key: string]: string} = {
  error: "\x1b[41m%s\x1b[0m",
  warn: "\x1b[33m%s\x1b[0m",
  info: "\x1b[94m%s\x1b[0m",
  verbose: "\x1b[35m%s\x1b[0m",
  debug: "\x1b[32m%s\x1b[0m",
  silly: "\x1b[36m%s\x1b[0m",
};

/* It's a Winston transport that logs to the console, and it allows you to specify a label for each log
message. */
export default class ConsoleLogTransport extends Transport {
  log(info: any, callback: {(): void}) {
    const label = info.consoleLoggerOptions?.label! || (info.level as string).toUpperCase();
    const finalMessage = `[${new Date().toISOString()}] [${label}] ${info.message}`;

    console.log(levelStyleMap[info.level], finalMessage);
    info.stack && console.log("\t", info.stack);
    callback();
  }
}

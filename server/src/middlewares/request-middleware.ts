import {RequestHandler, Request, Response, NextFunction} from "express";
import Joi from "joi";
import BadRequest from "../errors/bad-request";
import logger from "../logger";


/**
 * If the error has a details property, and the details property has a length greater than 0, and the
 * first item in the details array has a message property, then return the message property, otherwise
 * return undefined.
 * @param error - Joi.ValidationError - this is the error object that Joi returns when it fails to
 * validate the request body.
 * @returns A function that takes in a request and a response.
 */
const getMessageFromJoiError = (error: Joi.ValidationError): string | undefined => {
  if (!error.details && error.message) {
    return error.message;
  }
  return error.details && error.details.length > 0 && error.details[0].message ? `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}` : undefined;
};

interface HandlerOptions {
  validation?: {
    body?: Joi.ObjectSchema;
  };
}

/**
 * It takes a request handler and an optional options object, and returns a request handler that
 * validates the request body against the Joi schema in the options object, and then calls the original
 * request handler.
 * @param {RequestHandler} handler - RequestHandler - the function that will be called when the request
 * is made
 * @param {HandlerOptions} [options] - HandlerOptions
 * @returns A function that takes a handler and options and returns a function that takes a request,
 * response, and next function.
 */
export const requestMiddleware =
  (handler: RequestHandler, options?: HandlerOptions): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (options?.validation?.body) {
      const {error} = options?.validation?.body.validate(req.body);
      if (error != null) {
        next(new BadRequest(getMessageFromJoiError(error)));
        return;
      }
    }

    try {
      handler(req, res, next);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        logger.log({
          level: "error",
          message: "Error in request handler",
          error: err,
        });
      }
      next(err);
    }
  };

export default requestMiddleware;

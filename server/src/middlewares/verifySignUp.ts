import Account from "../models/Acounts.model";
import {Request, Response, NextFunction} from "express";
import logger from "../logger";

/**
 * Check if the email is already in use, if it is, return an error, if not, continue to the next
 * function.
 * @param {Request} req - Request - The incoming request object.
 * @param {Response} res - Response - The response object.
 * @param {NextFunction} next - NextFunction - The next middleware function in the stack.
 */
const checkDuplicateEmail = (req: Request, res: Response, next: NextFunction) => {
  Account.findOne({
    email: req.body.email,
  }).exec((err, account) => {
    if (err) {
      res.status(500).send({message: err});
      logger.log({level: "error", message: "Error on SignUp", error: err});
      return;
    }

    if (account) {
      res.status(400).send({message: "Failed! Email is already in use!"});
      logger.log({level: "error", message: "Failed! Email is already in use!", error: err});
      return;
    }

    logger.log({level: "info", message: "Email is not in use"});

    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

export default verifySignUp;

import Account from "../models/Accounts.model";
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
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({message: err});
      return;
    }

    if (user) {
      res.status(400).send({status: 400, message: "Failed! Email is already in use!"});
      return;
    }

    next();
  });
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
};

export default verifySignUp;

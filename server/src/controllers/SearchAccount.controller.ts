import {RequestHandler} from "express";
import requestMiddleware from "../middlewares/request-middleware";
import Account from "../models/Accounts.model";
import logger from "../logger";

const SearchAccount: RequestHandler = async (req, res) => {
  const {name, email, pin} = req.params;
  logger.log({
    level: "info",
    message: "Search account by name, email, pin, balance",
    name: name,
    email: email,
    pin: pin,
  });
  const account = await Account.findOne({name: name, email: email, pin: pin});
  if (!account) {
    res.send({message: "Account not found"});
  }
  res.send({account});
};

export default requestMiddleware(SearchAccount);

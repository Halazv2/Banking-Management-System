import {RequestHandler} from "express";
import requestMiddleware from "../middlewares/request-middleware";
import Account from "../models/Acounts.model";

const Accounts: RequestHandler = async (req, res) => {
  const Accounts = await Account.find();
  res.send({Accounts});
};

export default requestMiddleware(Accounts);

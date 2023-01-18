import {RequestHandler} from "express";
import requestMiddleware from "../../middlewares/request-middleware";
import Account from "../../models/Accounts.model";
import logger from "../../logger";

const GetAccountsByID: RequestHandler = async (req, res) => {
  const {id} = req.params;
  logger.log({
    level: "info",
    message: "Get account by id",
    id: id,
  });
  const account = await Account.findOne({_id: id});
  if (!account) {
    res.send({message: "Account not found"});
  }
  res.send({account});
};

export default requestMiddleware(GetAccountsByID);

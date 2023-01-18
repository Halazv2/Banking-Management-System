import {Request, RequestHandler} from "express";
import requestMiddleware from "../../middlewares/request-middleware";
import Account from "../../models/Accounts.model";
import logger from "../../logger";

const DeleteAccount: RequestHandler = async (req: Request, res) => {
  const {id} = req.params;
  logger.log({
    level: "info",
    message: "Delete account",
    id: id,
  });
  const account = await Account.findOneAndDelete({
    _id: id,
  });
  if (!account) {
    res.send({message: "Account not found"});
  }
  res.send({message: "Account deleted", account});
};

export default requestMiddleware(DeleteAccount);

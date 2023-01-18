import {RequestHandler} from "express";
import requestMiddleware from "../../middlewares/request-middleware";
import Account from "../../models/Accounts.model";
import Transaction from "../../models/transactions.model";
import logger from "../../logger";

const getTransactionsOfAccount: RequestHandler = async (req, res) => {
  const {id} = req.params;
  const account = await Account.findById(id);
  if (account) {
    const transactions = await Transaction.find({$or: [{sender: account}]});
    logger.log({
      level: "info",
      message: "Transactions of account " + account._id + " fetched",
    });
    res.send({transactions});
  } else {
    logger.log({
      level: "warn",
      message: "Account not found",
    });
    res.send({message: "Account not found"});
  }
};

export default requestMiddleware(getTransactionsOfAccount);

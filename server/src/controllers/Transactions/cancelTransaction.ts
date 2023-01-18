import Transaction from "../../models/transactions.model";
import logger from "../../logger";
import {Request} from "express";

interface cancelTransactionParams {
  id: string;
}

const cancelTransaction = async (req: Request<cancelTransactionParams>, res: any) => {
  const {id} = req.params;
  const transaction = await Transaction.findById(id).populate("sender").populate("receiver");
  if (transaction) {
    if (transaction.status === "pending") {
      transaction.status = "cancelled";
      transaction.sender.balance += transaction.amount;
      await transaction.save();
      await transaction.sender.save();
      logger.log({
        level: "info",
        message: "Transaction " + transaction._id + " cancelled",
      });
      res.send({message: "Transaction " + transaction._id + " cancelled", transaction});
    } else {
      logger.log({
        level: "warn",
        message: "Transaction " + transaction._id + " already completed",
      });
      res.send({message: "Transaction " + transaction._id + " already completed"});
    }
  }
};

export default cancelTransaction;

import Transaction from "../../models/transactions.model";
import Account from "../../models/Accounts.model";
import {Request, RequestHandler} from "express";
import logger from "../../logger";

interface sendMoneyBody {
  sender: string;
  receiver: string;
  amount: number;
}

const responseAndLog = (res: any, message: string, transaction?: any, level?: any) => {
  logger.log({
    level: level,
    message: !transaction ? message : "Transaction successful sender: " + transaction?.sender._id + ", receiver: " + transaction?.receiver._id + ", amount: " + transaction?.amount,
  });

  level === "info" ? res.send({message: message ? message : "Transaction successful", transaction}) : res.send({message: message});
};

const sendMoney = async (req: Request<{}, {}, sendMoneyBody>, res: any) => {
  const {sender, receiver, amount} = req.body;
  const senderAccount = await Account.findById(sender);
  const receiverAccount = await Account.findById(receiver);
  if (senderAccount && receiverAccount) {
    if (senderAccount.balance >= amount) {
      senderAccount.balance -= amount;
      receiverAccount.balance += amount;
      const transaction = new Transaction({
        sender: senderAccount,
        receiver: receiverAccount,
        amount,
      });
      await transaction.save();
      await senderAccount.save();
      await receiverAccount.save();

      responseAndLog(res, "Transaction successful", transaction, "info");
    } else {
      responseAndLog(res, `Insufficient balance, sender only has ${senderAccount.balance} but wants to send  ${amount}`, undefined, "warn");
    }
  } else {
    responseAndLog(res, "Sender or receiver not found", undefined, "warn");
  }
};

export default sendMoney;

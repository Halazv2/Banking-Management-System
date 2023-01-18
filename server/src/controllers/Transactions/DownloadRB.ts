import fs from "fs";
import path from "path";
import {Request, Response} from "express";
import pdf from "html-pdf";
import options from "../../helpers/options";
import Transaction from "../../models/transactions.model";
import Account from "../../models/Accounts.model";
import ejs from "ejs";

export default async function downloadRB(req: Request, res: Response) {
  const {accountId} = req.params;
  const account = await Account.findById(accountId);
  if (account) {
    const transactions = await Transaction.find({$or: [{sender: account}]});
    const transactionsWithAccount = transactions.map((transaction) => {
      return {
        ...transaction.toJSON(),
        sender: account,
        receiver: transaction.receiver._id,
      };
    });
    const html = await ejs.renderFile(path.join(__dirname, "../../helpers/template.html"), {transactions: transactionsWithAccount});
    pdf.create(html, options).toStream((err, stream) => {
      if (err) {
        res.status(500).json({
          message: "Internal Server Error",
        });
      } else {
        res.setHeader("Content-type", "application/pdf");
        stream.pipe(res);
        // res.setHeader("Content-Type", "application/pdf");
        // res.setHeader("Content-Disposition", `attachment; filename="RB-${account.name}.pdf"`);
        // stream.pipe(res);
      }
    });
  } else {
    
    res.status(404).json({
      message: "Account not found",
    });
  }
}

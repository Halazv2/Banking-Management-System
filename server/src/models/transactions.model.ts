import * as mongoose from "mongoose";
import {IAccount} from "./Accounts.model";

export interface ITransaction extends mongoose.Document {
  sender: IAccount;
  receiver: IAccount;
  amount: number;
  status: string;
  createdAt: Date;
}

interface ITransactionModel extends mongoose.Model<ITransaction> {}

const schema = new mongoose.Schema<ITransaction>(
  {
    sender: {type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true},
    receiver: {type: mongoose.Schema.Types.ObjectId, ref: "Account", required: true},
    amount: {type: Number, required: true},
    status: {type: String, required: true, default: "pending"},
  },
  {timestamps: true}
);

const Transaction = mongoose.model<ITransaction, ITransactionModel>("Transaction", schema);

export default Transaction;

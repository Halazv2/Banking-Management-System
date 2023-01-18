import {Model, Schema, model, Document} from "mongoose";

export interface IAccount extends Document {
  name: string;
  email: string;
  pin: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;
}

interface IAccountModel extends Model<IAccount> {}


const schema = new Schema<IAccount>(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    pin: {type: String, required: true},
    balance: {type: Number},
  },
  {timestamps: true}
);

const Account = model<IAccount, IAccountModel>("Account", schema);

export default Account;
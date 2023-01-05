import {Request, RequestHandler} from "express";
import Joi from "joi";
import requestMiddleware from "../middlewares/request-middleware";
import Account from "../models/Acounts.model";

export const addAccountSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  pin: Joi.string().required(),
  balance: Joi.number().required(),
});

interface addAccountBody {
  name: string;
  email: string;
  pin: string;
  balance: number;
}

const AddAccount: RequestHandler = async (req: Request<{}, {}, addAccountBody>, res) => {
  const {name, email, pin, balance} = req.body;
  const account = new Account({name, email, pin, balance});
  await account.save();
  res.send({
    message: "Account added",
    account,
  });
};

export default requestMiddleware(AddAccount, {validation: {body: addAccountSchema}});

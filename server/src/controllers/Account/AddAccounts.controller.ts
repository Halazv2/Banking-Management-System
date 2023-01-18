import {Request, RequestHandler} from "express";
import Joi from "joi";
import requestMiddleware from "../../middlewares/request-middleware";
import Account from "../../models/Accounts.model";

export const addAccountSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  pin: Joi.string().required(),
});

interface addAccountBody {
  name: string;
  email: string;
  pin: string;
}

const AddAccount: RequestHandler = async (req: Request<{}, {}, addAccountBody>, res) => {
  const {name, email, pin} = req.body;
  const account = new Account({name, email, pin});
  await account.save();
  res.send({
    message: "Account added",
    account,
  });
};

export default requestMiddleware(AddAccount, {validation: {body: addAccountSchema}});

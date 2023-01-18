"use strict";
import Account from "../../models/Accounts.model";
import {Request, RequestHandler} from "express";
import jwt from "jsonwebtoken";

interface addAccountBody {
  email: string;
  pin: string;
}

const login = async (req: Request<{}, {}, addAccountBody>, res: any) => {
  const {email, pin} = req.body;
  const account = (await Account.findOne({email})) as any;
  if (!account) {
    res.send({message: "Account not found"});
  }
  if (account.pin !== pin) {
    res.send({message: "Pin is incorrect"});
  }

  let token = jwt.sign({id: account._id}, process.env.SECRET as string, {
    expiresIn: 86400,
  });
  let response = {
    auth: true,
    token: token,
    account: account,
  };
  res.status(200).send(response);
};
export default login;

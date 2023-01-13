"use strict";
import Account from "../../models/Acounts.model";
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

  var token = jwt.sign({id: account._id}, process.env.SECRET as string, {
    expiresIn: 86400,
  });
  res.status(200).send({auth: true, token: token});
};
export default login;

import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({message: "No token provided!"});
  }

  jwt.verify(token as string, process.env.SECRET as string, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({message: "Unauthorized!"});
    }
    req.body.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken,
};
export default authJwt;

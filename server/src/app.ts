import bodyParser from "body-parser";
import compression from "compression";
import path from "path";
import express, {Request, Response, NextFunction} from "express";
import router from "./routes";
import cors from "cors";
const app = express();

function logResponseTime(req: Request, res: Response, next: NextFunction) {
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    const message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;

    console.log(message);
  });

  next();
}

app.use(logResponseTime);

/* A middleware that compresses the response body. */
app.use(compression());
/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(bodyParser.json());
/* Parsing the body of the request and making it available in the req.body property. */
app.use(bodyParser.urlencoded({extended: true}));

const allowedOrigins = ["http://127.0.0.1:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.use(router);

app.use((err: {status: any; message: any}, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  return res.status(err.status || 500).json({
    error: err.message,
  });
});

export default app;

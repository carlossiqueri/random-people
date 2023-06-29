import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import sorterRouter from "routers/sorter.router";


const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(httpStatus.OK);
});

app.use(sorterRouter);

const port: number = parseInt(process.env.PORT) || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${5000}`);
});

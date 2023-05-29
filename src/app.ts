import express, { Application, Request, Response } from "express";
const app: Application = express();
const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hellow world");
});

app.listen(port, () => {
  console.log(`UMS listening on port ${port}`);
});

export default app;

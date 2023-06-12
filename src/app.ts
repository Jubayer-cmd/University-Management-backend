import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/Routes/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandlar';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use(globalErrorHandler);

//Testing the APP
app.get('/', (req: Request, res: Response) => {
  res.send('hellow world');
});

export default app;

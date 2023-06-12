import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import router from './app/Routes/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandlar';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found!',
    errorMessage: [{ path: req.originalUrl, message: 'Not Found' }],
  });
  next();
});
//Testing the APP
app.get('/', (req: Request, res: Response) => {
  res.send('hellow world');
});

export default app;

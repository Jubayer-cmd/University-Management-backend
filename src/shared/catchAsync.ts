import { NextFunction, Request, RequestHandler, Response } from 'express';

const catvhAsync =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default catvhAsync;

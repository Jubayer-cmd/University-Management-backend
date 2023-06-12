import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catvhAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUsers: RequestHandler = catvhAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully create a user',
      data: result,
    });

    next();
  }
);

export const UserController = { createUsers };

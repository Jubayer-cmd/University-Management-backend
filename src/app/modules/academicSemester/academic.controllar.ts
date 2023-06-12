import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import catvhAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './acadedmicSemester.service';

const createSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully create a Academic Semester',
      data: result,
    });
  }
);

export const AcademicController = { createSemester };

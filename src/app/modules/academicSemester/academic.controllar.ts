import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../Constants/pagination';
import catvhAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { AcademicSemesterService } from './acadedmicSemester.service';

const createSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully create a Academic Semester',
      data: result,
    });

    next();
  }
);

const getAllSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const pagignationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemester(
      pagignationOptions
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully fetched Academic Semester',
      meta: result?.meta,
      data: result?.data,
    });

    next();
  }
);

export const AcademicController = { createSemester, getAllSemester };

import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../Constants/pagination';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import catvhAsync from './../../../shared/catchAsync';
import { AcademicSemesterService } from './acadedmicSemester.service';
import { IAcademicSemester } from './academic.interface';

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
    const filters = pick(req.query, ['searchTerm', 'title', 'code', 'year']);

    const pagignationOptions = pick(req.query, paginationFields);
    const result = await AcademicSemesterService.getAllSemester(
      filters,
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

const getSingleSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully fetched Academic Semester',
      data: result,
    });

    next();
  }
);

export const AcademicController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
};

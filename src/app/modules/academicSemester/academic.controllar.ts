import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import paginationFields from './../../../Constants/pagination';
import catvhAsync from './../../../shared/catchAsync';
import { AcademicSemesterService } from './acadedmicSemester.service';
import { IAcademicSemester } from './academic.interface';

const createSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response) => {
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
  }
);

const getAllSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response) => {
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
  }
);

const getSingleSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.getSingleSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully fetched Academic Semester',
      data: result,
    });
  }
);

const updateSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await AcademicSemesterService.updateSemester(id, updateData);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully update Academic Semester',
      data: result,
    });
  }
);

const deleteSemester: RequestHandler = catvhAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.deleteSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Successfully deleted Academic Semester',
      data: result,
    });
  }
);

export const AcademicController = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester,
};

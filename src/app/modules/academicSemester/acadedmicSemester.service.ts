import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../interfaces/common';
import { IPagignationOptions } from '../../interfaces/pagination';
import { academicTitleCodeMapper } from './academic.constant';
import { IAcademicSemester } from './academic.interface';
import { AcademicSemester } from './academic.model';
const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester name or code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemester = async (
  pagignationOptions: IPagignationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { page = 1, limit = 10 } = pagignationOptions;
  const skip = (page - 1) * limit;
  const result = await AcademicSemester.find({}).sort().skip(skip).limit(limit);

  return {
    meta: {
      page,
      limit,
      total: result.length,
    },
    data: result,
  };
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
};

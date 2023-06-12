import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
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

export const AcademicSemesterService = {
  createSemester,
};

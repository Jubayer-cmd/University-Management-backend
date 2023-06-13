import httpStatus from 'http-status';
import { SortOrder } from 'mongoose';
import calculatorPagination from '../../../Helpers/pagination.helper';
import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../interfaces/common';
import { IPagignationOptions } from '../../interfaces/pagination';
import { academicTitleCodeMapper } from './academic.constant';
import {
  IAcademicSemester,
  IAcademicSemesterFilter,
} from './academic.interface';
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
  filters: IAcademicSemesterFilter,
  pagignationOptions: IPagignationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const academicSearch = ['title', 'code', 'year'];
  // const andConditions = [
  //   {
  //     $or: [
  //       { title: { $regex: searchTerm, $options: 'i' } },
  //       { code: { $regex: searchTerm, $options: 'i' } },
  //       { year: { $regex: searchTerm, $options: 'i' } },
  //     ],
  //   },
  // ];
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: academicSearch.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    calculatorPagination(pagignationOptions);

  const sortCondtions: {
    [key: string]: SortOrder;
  } = {};

  if (sortBy && sortOrder) {
    sortCondtions[sortBy] = sortOrder;
  }

  const whereCondotions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicSemester.find(whereCondotions)
    .sort(sortCondtions)
    .skip(skip)
    .limit(limit);

  return {
    meta: {
      page,
      limit,
      total: result.length,
    },
    data: result,
  };
};

const getSingleSemester = async (
  id: string
): Promise<IAcademicSemester | null> => {
  const result = await AcademicSemester.findById(id);
  return result;
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
};

import httpStatus from 'http-status';
import { Schema, model } from 'mongoose';
import ApiError from '../../../errors/ApiError';
import {
  academicSemesterCode,
  academicSemesterMonth,
  academicSemesterTitles,
} from './academic.constant';
import { AcadamicSemesterModel, IAcademicSemester } from './academic.interface';

const academicSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

academicSchema.pre('save', async function (next) {
  const existingSemester = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (existingSemester) {
    throw new ApiError(httpStatus.CONFLICT, 'Academic semester already exists');
  }
  next();
});

export const AcademicSemester = model<IAcademicSemester, AcadamicSemesterModel>(
  'AcademicSemester',
  academicSchema
);

import express from 'express';
import ValidateRequest from '../../middlewares/validateRequests';
import { AcademicController } from './academic.controllar';
import { academicValidation } from './academicValidation';

const router = express.Router();

router.post(
  '/create-semester',
  ValidateRequest(academicValidation.createAcademicZodSchema),
  AcademicController.createSemester
);

router.get('/', AcademicController.getAllSemester);

export const AcademicSemesterRoutes = router;

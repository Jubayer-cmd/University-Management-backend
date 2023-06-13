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
router.get('/:id', AcademicController.getSingleSemester);

router.patch(
  '/:id',
  ValidateRequest(academicValidation.updateAcademicZodSchema),
  AcademicController.updateSemester
);

router.delete('/:id', AcademicController.deleteSemester);

router.get('/', AcademicController.getAllSemester);

export const AcademicSemesterRoutes = router;

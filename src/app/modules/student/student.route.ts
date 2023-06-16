import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';
import { StudentController } from './student.controller';
import { StudentValidaion } from './student.validation';
const router = express.Router();

router.get('/:id', StudentController.getSingleStudent);
router.get('/', StudentController.getAllStudents);

router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  ValidateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRoutes = router;

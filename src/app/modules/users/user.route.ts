import express from 'express';

import ValidateRequest from '../../middlewares/validateRequests';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-student',
  ValidateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent
);

router.post(
  '/create-faculty',
  ValidateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculy
);

router.post(
  '/create-admin',
  ValidateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin
);

export const UserRoutes = router;

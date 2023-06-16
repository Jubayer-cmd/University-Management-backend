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

export const UserRoutes = router;

import express from 'express';
import ValidateRequest from '../../middlewares/validateRequests';
import { AuthController } from './auth.controller';
import { AuthValidation } from './authValidation';

const router = express.Router();

router.post(
  '/login',
  ValidateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;

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

router.post(
  '/refresh-token',
  ValidateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);

export const AuthRoutes = router;

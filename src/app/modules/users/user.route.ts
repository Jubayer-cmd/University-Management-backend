import express from 'express'
import ValidateRequest from '../../middlewares/validateRequests'
import { UserController } from './user.controller'
import { UserValidation } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  ValidateRequest(UserValidation.createZodSchema),
  UserController.createUsers
)

export const UserRoutes = router

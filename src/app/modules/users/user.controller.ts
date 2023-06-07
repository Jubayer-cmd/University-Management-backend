import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUsers: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)
    res.status(400).json({
      success: true,
      message: 'Successfully create a user',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = { createUsers }

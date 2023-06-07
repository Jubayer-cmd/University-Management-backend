import mongoose from 'mongoose'
import { IGenericErrorResponse } from '../app/interfaces/common'
import { IGenericErrorMessage } from '../app/interfaces/errot'

const handleValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMeassage: errors,
  }
}

export default handleValidationError

import { ZodError, ZodIssue } from 'Zod';
import { IGenericErrorResponse } from '../app/interfaces/common';
import { IGenericErrorMessage } from '../app/interfaces/errot';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;

import { ZodError } from 'Zod';

const handleZodError = (error: ZodError) => {
  const errors = 'lol';
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  };
};

export default handleZodError;

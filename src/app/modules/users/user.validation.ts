import { z } from 'Zod';

const createZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is Required',
    }),
    password: z.string().optional(),
  }),
});

export const UserValidation = {
  createZodSchema,
};

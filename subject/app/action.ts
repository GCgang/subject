'use server';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .email()
    .refine(
      (email) => email.endsWith('@zod.com'),
      'Only @zod.com emails are allowed'
    ),
  username: z.string().min(5, 'Username should be at least 5 characters long.'),
  password: z
    .string()
    .min(10, 'Password should be at least 10 characters long.')
    .regex(/[0-9]/, 'Password should contain least one number (0123456789)'),
});

export async function logIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return { success: false, fieldErrors: result.error.flatten().fieldErrors };
  } else {
    return { success: true, message: 'Welcome back!' };
  }
}

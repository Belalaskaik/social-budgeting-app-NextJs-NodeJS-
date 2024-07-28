'use server'

import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long")
});

export async function signUp(prevState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  const result = signUpSchema.safeParse({ name, email, password });

  if (!result.success) {
    return {
      ok: false,
      errors: result.error.flatten().fieldErrors
    };
  }

  // Here you would typically handle the actual sign-up logic
  console.log('Server-side log:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  return {
    ok: true,
    message: "Sign up successful!",
    fields: { name, email, password }
  };
}
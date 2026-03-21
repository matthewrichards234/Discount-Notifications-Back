import * as z from "zod";

export const User = z.object({
  firstName: z
    .string()
    .min(2, "Name must be 2 characters or longer.")
    .max(30, "Name must be 30 characters or less.")
    .trim(),
  lastName: z.string().min(2).max(30).trim(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "password must be 8 characters or longer.")
    .max(30, "password must be 30 characters or less."),
});

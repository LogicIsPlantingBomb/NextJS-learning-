import {z} from 'zod';

export const usernameValidation = z.string()
					.min(3,"Username must be more than 3 character long")
					.max(20,"Username must be less than 20 character long").
					regex(/^[a-zA-Z0-9_]*$/,"Username can only contain alphabets, numbers and underscore");

export const passwordValidation = z.string().min(6,"Password must be more than 6 character long").max(10,"Password must be less than 10 character long");

export const emailValidation = z.string().email("Invalid email address");

export const signUpSchema = z.object({
	username: usernameValidation,
	password: passwordValidation,
	email: emailValidation
})


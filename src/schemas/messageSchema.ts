import {z} from 'zod';


export const messageSchema = z.object({
	content :z.string().min(10,{message:"content must be more than 10 charaters" }).max(1000,{message:"content must be less than 1000 charaters" }),
});


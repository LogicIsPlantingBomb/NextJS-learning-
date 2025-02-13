import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import {sendVerificationEmail} from "@/helpers/sendVerificationEmail";
export async function POST (request:Request){
	await dbConnect();
	try{
		const {username,email,password} = await request.json();
		return Response.json({
			success:true,
			message:" User Registered Successfully"
				    )}


	} catch (error){
		console.error(" Error registering User ",error);
		return Response.json({
			success:false,
			message:"Error registering User"
		},{
			stutus:500
		})
	}
}

import {resend } from '@lib/resend';
import VerificationEmail from "../../emails/verificationEmail"; 
import { ApiResponse } from " @/types/ApiResponse";

export async function sendVarificationEmail(
	email: string,
	username: string,
	verifyCode: string,

):Promise<ApiResponse>{
	try{
		await resend.emails.send({
			from : "onboarding@resend.dev",
			to:email,
			subject:"Verification code",
			react:VerificationEmail({username,otp:verifyCode}),
		});
		return (success:true,message:"Verification email sent");

	}catch(emailError){
		console.error("Error sending verification email", emailError);
		return (success:false,message:"Error sending Veriification email");
	}
}


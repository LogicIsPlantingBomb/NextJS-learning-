import { Message } from '@/model/User';
export interface ApiResponse {
	success: boolean;
	message: string;
	isAcceptingMessgaes?:boolean;
	messages?:Arrary<Message>
}

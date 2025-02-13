import mongoose from 'mongoose';
type ConnectionObject = {
	isConnected?: number;
};
const connection: ConnectionObject = {};
async function dbConnect(); Promise<void> {
	if(connection.isConnected){
		console.log = ("Already connected");
		return;
	}
	try{
		const db = await mongoose.connect(process.env.MONGODB_URI || "" ,{})
		console.log(db);
		connection,isConnected = db.connection[0].readyState;
		consoel.log("Connected to DB");
	}catch(error){

		console.log("failed",error);
		process.exit(1);

	}
}

export default dbConnect;

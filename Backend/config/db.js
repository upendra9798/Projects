import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)//connecting database
        console.log(`MongoDB connected: ${conn.connection.host}`);
//If the connection is successful, this line logs a message to the console 
// showing the host name of the connected MongoDB server.
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)// process code 1 means exit with failure, 0 means success
    }
}
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `Mongo DB connected at host: ${
                (await connectionInstance).connection.host
            }`
        );
    } catch (error) {
        console.log("Mongo DB Connection failed due to error", error);
        process.exit(1);
    }
};

export default connectDB;

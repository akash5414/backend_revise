import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from "express";
export const app = express();

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', err => {
            console.error(err.message);
            throw err;
        });
        console.log(`\n MongoDb connected !! DB Host: ${connectionInstance.connection.host}`);
        app.connect(`$process.env.PORT`,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

export default connectDB;
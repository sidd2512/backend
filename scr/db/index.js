import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_NAME } from '../constant.js';

dotenv.config({ path: './.env' }); // Ensure the path is correct

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB with URI:', process.env.MONGODB_URI);
    console.log('Database Name:', DB_NAME);
    
    // Directly use the URI without deprecated options
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    
    // Correct the way we access the host
    console.log(`MongoDB connected !! DB Host ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('ERROR in Connecting MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;

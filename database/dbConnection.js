import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const mongoURI = process.env.MONGO_URI;


const dbConnection = async () => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: 'RESERVATIONS',

    });
    console.log('Connected to database!');
  } catch (err) {
    console.error(`Error connecting to database: ${err.message}`);
  }
};

export default dbConnection;

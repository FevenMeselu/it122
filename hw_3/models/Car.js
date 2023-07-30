import mongoose from 'mongoose';
const { Schema } = mongoose;
 
import { connectionString } from "../credentials.js";
 
mongoose.connect(connectionString, {
    dbName: 'IT122_projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});
 
const carsSchema = new Schema({
title: { type: String, required: true },
name: String,
make: String,
model:String,
year: String
});

export const Car = mongoose.model('Car', carsSchema);
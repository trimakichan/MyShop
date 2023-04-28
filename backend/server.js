import express from 'express';
import dotenv from 'dotenv'
// Syntacs are almost the same but you have to add .js in the backend folder. 
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';

const app = express();
// dotenv.config() allows us to connect to the .env file.
dotenv.config();
connectDB();

app.use('/api/products', productRoutes)

app.use(errorHandler)

app.listen(5000, console.log('server is running on port 5000'))




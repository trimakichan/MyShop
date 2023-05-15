import express from 'express';
import dotenv from 'dotenv'
// Syntacs are almost the same but you have to add .js in the backend folder. 
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/userRoutes.js'
import errorHandler from './middleware/errorMiddleware.js';


const app = express();
// dotenv.config() allows us to connect to the .env file.
dotenv.config();
connectDB();

app.use(express.json())  //get the data in the form of a JSON from anywhere the client sends you. 
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(errorHandler)

app.listen(5000, console.log('server is running on port 5000'))




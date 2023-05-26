import express from 'express';
import dotenv from 'dotenv'
// Syntacs are almost the same but you have to add .js in the backend folder. 
import path from 'path';
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
app.get('/api/config/paypal', (req, res) => 
    res.send(process.env.PAYPAL_CLIENT_ID)
)

//this runs our app in heroku
const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build'))) 
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })   
};

app.use(errorHandler)

const PORT = process.env.PORT 
app.listen(PORT, console.log(`Server is running on port ${PORT}`));





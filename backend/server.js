import express from 'express';
import dotenv from 'dotenv'
// Syntacs are almost the same but you have to add .js in the backend folder. 
import products from './data/products.js'
import connectDB from './config/db.js';

const app = express();
// dotenv.config() allows us to connect to the .env file.
dotenv.config();
connectDB();

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('server is running on port 5000'))




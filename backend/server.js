import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors'
dotenv.config()

const port = process.env.PORT || 5000;

connectDb() // to connectDB

const app = express();

app.use(express.json());

// cors is like middleware to allow data to be taken from the port 3000 from the front end              
app.use(cors('http://localhost:3000'))


app.get('/', (req, res) => {
    res.send('API is running......');
});

app.get('/api/products', (req, res) => {
    return res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p._id === id);
    // We're using find to say, well, go through the products and if the product ID or ID matches the ID that's in the URL, then we're going to return that product.
    res.status(200).json(product);
})

app.listen(port, () =>
    console.log(`API is running on port ${port}`));
import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running......');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p._id === id);
    // We're using find to say, well, go through the products and if the product ID or ID matches the ID that's in the URL, then we're going to return that product.
    res.json(product);
})

app.listen(port, () =>
    console.log(`API is running on port ${port}`));
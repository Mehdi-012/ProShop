import express from "express";
const router = express.Router();
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from "../models/productModel.js";

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.status(200).json(products);
}));

router.get('/:id', asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id);


    // const product = products.find((p) => p._id === id);
    // We're using find to say, well, go through the products and if the product ID or ID matches the ID that's in the URL, then we're going to return that product.

    if (product) {
        res.status(200).json(product);
    }
    res.status(404).json({ message: 'Product not found' });
}))


export default router
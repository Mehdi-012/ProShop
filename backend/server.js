import express from 'express';
// import products from './data/products.js';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cors from 'cors'
dotenv.config()
import productRoutes from './routes/productRoute.js'

const port = process.env.PORT || 5000;

connectDb() // to connectDB

const app = express();

app.use(express.json());

// cors is like middleware to allow data to be taken from the port 3000 from the front end              
app.use(cors('http://localhost:3000'))


app.get('/', (req, res) => {
    res.send('API is running......');
});

app.use('/api/products', productRoutes);



app.listen(port, () =>
    console.log(`API is running on port ${port}`));
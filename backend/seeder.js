import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js"
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDb from "./config/db.js";

dotenv.config()

await connectDb() // to connectDB

const importData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProduct = products.map((product) => {
            return { ...product, user: adminUser }
        })
        console.log(sampleProduct)
        // Spread Operator to be checked once again 

        await Product.insertMany(sampleProduct)

        console.log('Data Imported'.green.inverse)

        // process.exit will exit the Node process.
        process.exit()

    }

    catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1) // mean the closing
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();

        console.log('Data Destroyed'.red.inverse)
        process.exit()
    } catch (error) {
        console.log('Data Imported'.green.inverse)
        process.exit()
    }
}

// console.log(process.argv)

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}
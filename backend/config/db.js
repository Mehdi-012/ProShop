import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.URL)
        console.log(`MongoDb connected : ${conn.connection.host}`);

    } catch (error) {
        console.log(`MongoDb connection error: ${error.message}`);

    }

}

export default connectDb
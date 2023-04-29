require("dotenv").config()

const connectDB = require("./db/connect")
const Product = require("./models/product")

const storeProducts = require("./products.json")


const start = async () =>{
    try {
        await connectDB(process.env.MONGO_CONNECTION_STRING)
        await Product.deleteMany()
        await Product.create(storeProducts)
        console.log("Database populated with json file data")
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
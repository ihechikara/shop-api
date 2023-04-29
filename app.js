const express = require("express")
const app = express()
const connectDB = require("./db/connect")

const productsRouter = require("./routes/products")

require("dotenv").config()
require("express-async-errors")

const port = process.env.PORT || 3000

// middleware
const notFound = require("./middleware/not-found")
const errorHandler = require("./middleware/error-handler")

// routes 

app.get("/", (req, res)=>{
    res.send("Welcome to the shop API")
})

app.use("/api/v1/products", productsRouter)

app.use(notFound)
app.use(errorHandler)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_CONNECTION_STRING)
        app.listen(port, ()=>{
            console.log(`Server is running on ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
const mongoose = require("mongoose")

const prodctSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must provide a product name"],
    },
    price: {
        type: Number,
        required: [true, "You must provide a price for the product"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 2.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported"
        }
    }
})

module.exports = mongoose.model("products", prodctSchema)
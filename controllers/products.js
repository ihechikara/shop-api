const Product = require("../models/product")


const getAllProducts = async (req, res) =>{
    const { featured, company, name, sort, select } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === "true" ? true : false
    }
    if (company) {
        queryObject.company = { $regex: company, $options: "i"}
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i"}
    }


    let result = Product.find(queryObject)

    if(sort){
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    } else{
        result = result.sort("createdAt")
    }

    if(select){
        const selectList = select.split(",").join(" ")
        result = result.select(selectList)
    }
    const products = await result

    res.status(200).json({products, numOfProducts: products.length})
}

module.exports = {
    getAllProducts
}
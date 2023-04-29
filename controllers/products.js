const getAllProducts = async (req, res) =>{
    res.status(200).send("All products")
}

module.exports = {
    getAllProducts
}
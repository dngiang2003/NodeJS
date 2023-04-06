const express = require("express");
const { 
    getProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
} = require("../controllers/product.controller");

const router = express.Router();

router.route('/product')
.get(getProducts)
.post(createProduct)

router.route('/product/:productID')
.get(getProductByID)
.put(updateProductByID)
.delete(deleteProductByID);

module.exports = router;
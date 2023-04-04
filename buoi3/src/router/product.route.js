const express = require("express");
const { 
    getProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
} = require("../controllers/product.controller");

const router = express.Router();

router.get('/product', getProducts);

router.get('/product/:productID', getProductByID);

router.post('/add-product', createProduct);

router.put('/update-product/:productID', updateProductByID);

router.delete('/delete-product/:productID', deleteProductByID);

module.exports = router;
const getHome = ((req, res) => {
    res.render('index');
    // res.json({
    //     msg: "ok",
    // });
});

const getLogin = ((req, res) => {
    res.render('login');
});

const getReister = ((req, res) => {
    res.render('register');
});

const getProduct = ((req, res) => {
    const products = require("../data/dataProduct");
    res.render('product', {products});
});

const getAddProduct = ((req, res) => {
    res.render('add-product');
});

module.exports = {
    getHome,
    getLogin,
    getReister,
    getProduct,
    getAddProduct
};
// danh sách sản phẩm
const products = require("../data/dataProduct");


// trả về danh sách tất cả sản phẩm
// http://localhost:3000/product?price=55.99
// http://localhost:3000/product?price=55.99&operator=lt
const getProducts = ((req, res) => {
    // mặc định 'eq' - bằng, 'lt' - nhỏ hơn, 'gt' - lớn hơn
    const {price, operator = 'eq'} = req.query;
    let data = products;
    if (price) {
        const operators = {
            'eq': (product) => product.price == price,
            'lt': (product) => product.price <= price,
            'gt': (product) => product.price >= price,
        };
        data = data.filter(operators[operator]);
    };
    res.status(200).json({
        product: data
    });
});


// trả về danh sách sản phẩm sau khi thêm sản phẩm mới
// http://localhost:3000/add-product?title=hello&rate=999&count=8
const createProduct = ((req, res) => {
    let data = products;
    const lastProduct = data[data.length - 1];
    const id = lastProduct.id + 1;
    const {
        title = "null",
        price = 0,
        description = "null",
        category = "null",
        image = "null",
        rate = 0,
        count = 0
    } = req.query;
    const rating = {rate: parseFloat(rate), count: parseInt(count)};
    const newProduct = { id, title, price, description, category, image, rating};
    data.push(newProduct);
    res.status(200).json({
        product: data
    });
});


// trả về sản phẩm theo ID
// http://localhost:3000/product/5
const getProductByID = ((req, res) => {
    const productID = req.params.productID;
    let data = products;
    if (productID) {
        data = products.filter((product) => product.id == productID);
    };
    res.status(200).json({
        product: data
    });
});


// trả về danh sách sản phẩm sau khi sửa đổi
// http://localhost:3000/update-product/1?title=test1&count=15
const updateProductByID = (req, res) => {
    const productID = req.params.productID;
    const {title, price, description, category, image, rate, count} = req.query;
    const index = products.findIndex(product => product.id == productID);
    if (index == -1) {
        return res.status(404).json({
            message: "Product not found!"
        });
    };
    let data = products;
    const rating = {
        rate: parseFloat(rate || data[index].rating.rate),
        count: parseInt(count || data[index].rating.count)
    };
    const newProduct = {
        title: title || data[index].title,
        price: price || data[index].price,
        description: description || data[index].description,
        category: category || data[index].category,
        image: image || data[index].image,
        rating
    };
    Object.assign(data[index], newProduct);
    res.status(200).json({
        product: data
    });
};


// trả về danh sách sản phẩm sau khi xóa
// http://localhost:3000/delete-product/5
// http://localhost:3000/delete-product/-5
const deleteProductByID = ((req, res) => {
    const productID = req.params.productID;
    let data = products;
    const index = products.findIndex(product => product.id == productID);
    if (index === -1) {
        return res.status(404).json({
            'message': "Product not found!"
        });
    };
    data.splice(index, 1);
    res.status(200).json({
        product: data
    });
});


module.exports = {
    getProducts,
    createProduct,
    getProductByID,
    updateProductByID,
    deleteProductByID
};
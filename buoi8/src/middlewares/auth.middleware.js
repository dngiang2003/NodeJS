const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const authMiddleware = async (req, res, next) => {
    // In Postman use Query Params: [key, value] = [permission, admin]
    // let { permission } = req.query;
    // if (permission !== 'admin') {
    //     const err = new Error('Unauthorized');
    //     err.status = 401;
    //     throw err;
    // }
    const authorization = req.headers.authorization;

    if (!authorization) {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
    }

    const token = authorization.split(" ")[1];
    const payload = await jwt.verify(token, process.env.KEY);

    if (!payload) {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
    }

    const userId = payload.id;
    const user = await User.findOne({ _id: userId});

    if (!user) {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
    }

    if (user.role !== "admin") {
        const err = new Error('Unauthorized');
        err.status = 401;
        throw err;
    }

    req.user = user;

    next();
}

module.exports = authMiddleware;

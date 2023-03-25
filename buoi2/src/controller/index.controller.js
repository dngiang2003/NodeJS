const getHome = ((req, res) => {
    // res.render('index');
    res.json({
        msg: "ok",
    });
});

const getLogin = ((req, res) => {
    res.render('login');
});

const getReister = ((req, res) => {
    res.render('register');
});

module.exports = {
    getHome,
    getLogin,
    getReister
};
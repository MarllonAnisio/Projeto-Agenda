exports.globalMiddleware = (req, res, next) => {
    console.log("Passei no globalMiddleware");
    res.locals.errors = req.flash('errors');
    console.log("res.locals.errors", res.locals.errors);
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404');

    }
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
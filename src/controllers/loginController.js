const LoginModel = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.login = async function(req, res){
    const login = new LoginModel(req.body);
    await login.registrar();

    if(login.errors.length > 0) {
        req.flash('errors', login.errors);
        req.session.save(() => res.redirect('back'));
        return;
    }

}
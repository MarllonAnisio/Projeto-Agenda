exports.index = (req, res) => {
    res.render('cadastro');
}
exports.registrar = (req, res) => {
    console.log(req.body); // Só para você ver os dados chegando no terminal
    res.redirect('/login/index');
};
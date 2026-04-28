const mongoose = require('mongoose');
const validator = require('validator');


const LoginSchema = new mongoose.Schema({
    email: {type: String, required: true},
    senha: {type: String, required: true}
});

const LoginModel = mongoose.model("Login", LoginSchema)

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];  
        this.user = null;
    }

    async registrar() {
        this.validaUsuario();
        if(this.erros.length > 0) return;
        try{
            this.user = await LoginModel.create(this.body)
        }catch(err){
            console.log(err);
        }
    }

    validaUsuario(){
        this.cleanUp();
        if(!validator.isEmail(this.body.email)) this.erros.push("Email é inválido");
        if(this.body.password.length < 8 || this.body.password.length > 50){
             this.erros.push("Senha deve conter entre 8 e 50 caracteres");
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }
        this.body = {
            email: this.body.email,
            password: this.body.senha
        }
    }

}
module.exports = Login;
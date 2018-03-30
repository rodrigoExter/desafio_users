"use strict";
var Usuario = (function () {
    function Usuario(nome, email, cpf, telefone, funcao, perfil, habilitado) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.funcao = funcao;
        this.perfil = perfil;
        this.habilitado = habilitado;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map
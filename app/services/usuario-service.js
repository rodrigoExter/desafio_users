"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UsuarioService = (function () {
    function UsuarioService() {
    }
    UsuarioService.prototype.listarTodos = function () {
        var usuarios = sessionStorage['usuarios'];
        return usuarios ? JSON.parse(usuarios) : [];
    };
    UsuarioService.prototype.cadastrar = function (usuario) {
        var usuarios = this.listarTodos();
        usuarios.push(usuario);
        sessionStorage['usuarios'] = JSON.stringify(usuarios);
    };
    UsuarioService.prototype.atualizar = function (id, usuario) {
        var usuarios = this.listarTodos();
        usuarios[id].nome = usuario.nome;
        usuarios[id].email = usuario.email;
        usuarios[id].cpf = usuario.cpf;
        usuarios[id].telefone = usuario.telefone;
        usuarios[id].funcao = usuario.funcao;
        usuarios[id].perfil = usuario.perfil;
        usuarios[id].habilitado = usuario.habilitado;
        sessionStorage['usuarios'] = JSON.stringify(usuarios);
    };
    UsuarioService.prototype.excluir = function (id) {
        var usuarios = this.listarTodos();
        usuarios.splice(id, 1);
        sessionStorage['usuarios'] = JSON.stringify(usuarios);
    };
    UsuarioService.prototype.buscarPorId = function (id) {
        var usuarios = this.listarTodos();
        return usuarios[id];
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario-service.js.map
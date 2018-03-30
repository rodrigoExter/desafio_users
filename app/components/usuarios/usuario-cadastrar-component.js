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
var usuario_1 = require('../.././models/usuario');
var usuario_service_1 = require('../.././services/usuario-service');
var router_1 = require('@angular/router');
var UsuarioCadastrarComponent = (function () {
    function UsuarioCadastrarComponent(router, UsuarioService) {
        this.router = router;
        this.UsuarioService = UsuarioService;
    }
    UsuarioCadastrarComponent.prototype.ngOnInit = function () {
        this.usuario = new usuario_1.Usuario();
    };
    UsuarioCadastrarComponent.prototype.cadastrar = function () {
        this.UsuarioService.cadastrar(this.usuario);
        this.router.navigate(['/usuario-listar']);
    };
    UsuarioCadastrarComponent = __decorate([
        core_1.Component({
            selector: 'usuario-cadastrar',
            templateUrl: 'app/views/usuarios/cadastrar.html',
            providers: [usuario_service_1.UsuarioService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioCadastrarComponent);
    return UsuarioCadastrarComponent;
}());
exports.UsuarioCadastrarComponent = UsuarioCadastrarComponent;
//# sourceMappingURL=usuario-cadastrar-component.js.map
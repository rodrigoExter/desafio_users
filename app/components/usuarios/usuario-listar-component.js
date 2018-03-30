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
var usuario_service_1 = require('../.././services/usuario-service');
var router_1 = require('@angular/router');
var modal_util_component_1 = require('../utils/modal-util-component');
var UsuarioListarComponent = (function () {
    function UsuarioListarComponent(UsuarioService) {
        this.UsuarioService = UsuarioService;
    }
    UsuarioListarComponent.prototype.ngOnInit = function () {
        this.usuarios = this.UsuarioService.listarTodos();
    };
    UsuarioListarComponent.prototype.excluir = function (id) {
        this.idExcluir = id;
    };
    UsuarioListarComponent.prototype.onExcluir = function () {
        this.UsuarioService.excluir(this.idExcluir);
        this.idExcluir = -1;
        this.usuarios = this.UsuarioService.listarTodos();
    };
    UsuarioListarComponent = __decorate([
        core_1.Component({
            selector: 'usuario-listar',
            templateUrl: 'app/views/usuarios/listar.html',
            providers: [usuario_service_1.UsuarioService],
            directives: [router_1.ROUTER_DIRECTIVES, modal_util_component_1.ModalUtilComponent]
        }), 
        __metadata('design:paramtypes', [usuario_service_1.UsuarioService])
    ], UsuarioListarComponent);
    return UsuarioListarComponent;
}());
exports.UsuarioListarComponent = UsuarioListarComponent;
//# sourceMappingURL=usuario-listar-component.js.map
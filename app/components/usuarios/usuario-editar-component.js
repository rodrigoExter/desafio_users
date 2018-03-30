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
var UsuarioEditarComponent = (function () {
    function UsuarioEditarComponent(route, router, UsuarioService) {
        this.route = route;
        this.router = router;
        this.UsuarioService = UsuarioService;
    }
    UsuarioEditarComponent.prototype.ngOnInit = function () {
        this.id = +this.route.snapshot.params['id'];
        this.usuario = this.UsuarioService.buscarPorId(this.id);
    };
    UsuarioEditarComponent.prototype.atualizar = function () {
        this.UsuarioService.atualizar(this.id, this.usuario);
        this.router.navigate(['/usuario-listar']);
    };
    UsuarioEditarComponent = __decorate([
        core_1.Component({
            selector: 'usuario-editar',
            templateUrl: 'app/views/usuarios/editar.html',
            providers: [usuario_service_1.UsuarioService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, usuario_service_1.UsuarioService])
    ], UsuarioEditarComponent);
    return UsuarioEditarComponent;
}());
exports.UsuarioEditarComponent = UsuarioEditarComponent;
//# sourceMappingURL=usuario-editar-component.js.map
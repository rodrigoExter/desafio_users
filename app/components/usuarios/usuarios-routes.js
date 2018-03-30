"use strict";
var usuario_listar_component_1 = require('./usuario-listar-component');
var usuario_cadastrar_component_1 = require('./usuario-cadastrar-component');
var usuario_editar_component_1 = require('./usuario-editar-component');
exports.UsuariosRoutes = [
    {
        path: 'usuario-listar',
        component: usuario_listar_component_1.UsuarioListarComponent
    },
    {
        path: 'usuario-cadastrar',
        component: usuario_cadastrar_component_1.UsuarioCadastrarComponent
    },
    {
        path: 'usuario-editar/:id',
        component: usuario_editar_component_1.UsuarioEditarComponent
    },
    {
        path: '',
        redirectTo: '/usuario-listar',
        terminal: true
    }
];
//# sourceMappingURL=usuarios-routes.js.map
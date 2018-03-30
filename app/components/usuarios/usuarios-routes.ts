import { RouterConfig } from '@angular/router'; 
import { UsuarioListarComponent } from './usuario-listar-component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar-component';
import { UsuarioEditarComponent } from './usuario-editar-component';

export const UsuariosRoutes: RouterConfig = [
	{ 
		path: 'usuario-listar', 
		component: UsuarioListarComponent
	}, 
	{ 
		path: 'usuario-cadastrar', 
		component: UsuarioCadastrarComponent
	}, 
	{ 
		path: 'usuario-editar/:id', 
		component: UsuarioEditarComponent 
	},
	{ 
		path: '', 
		redirectTo: '/usuario-listar', 
		terminal: true 
	}
];
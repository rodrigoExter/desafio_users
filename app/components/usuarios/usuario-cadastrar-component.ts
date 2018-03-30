import { Component } from '@angular/core';
import { Usuario } from '../.././models/usuario';
import { UsuarioService } from '../.././services/usuario-service';
import { OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
	selector: 'usuario-cadastrar',
	templateUrl: 'app/views/usuarios/cadastrar.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class UsuarioCadastrarComponent implements OnInit {

	private usuario: Usuario;

	constructor(private router: Router, private UsuarioService: UsuarioService) {
	}

	ngOnInit() {
		this.usuario = new Usuario();
	}

	cadastrar() {
		this.UsuarioService.cadastrar(this.usuario);
		this.router.navigate(['/usuario-listar']);
	}
}
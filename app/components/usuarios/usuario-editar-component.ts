import { Component } from '@angular/core';
import { Usuario } from '../.././models/usuario';
import { UsuarioService } from '../.././services/usuario-service';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router'; 

@Component({
	selector: 'usuario-editar',
	templateUrl: 'app/views/usuarios/editar.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES ]
})
export class UsuarioEditarComponent implements OnInit {

	private id: number;
	private usuario: Usuario;

	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private UsuarioService: UsuarioService) {
	}

	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.usuario = this.UsuarioService.buscarPorId(this.id);
	}

	atualizar() {
		this.UsuarioService.atualizar(this.id, this.usuario);
		this.router.navigate(['/usuario-listar']);
	}
}
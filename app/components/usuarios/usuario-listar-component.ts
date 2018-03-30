import { Component } from '@angular/core';
import { Usuario } from '../.././models/usuario';
import { UsuarioService } from '../.././services/usuario-service';
import { OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ModalUtilComponent } from '../utils/modal-util-component';

@Component({
	selector: 'usuario-listar',
	templateUrl: 'app/views/usuarios/listar.html',
	providers: [ UsuarioService ],
	directives: [ ROUTER_DIRECTIVES, ModalUtilComponent ]
})
export class UsuarioListarComponent implements OnInit {

	private usuarios: Usuario[];
	private idExcluir: number;

	constructor(private UsuarioService: UsuarioService) {
	}

	ngOnInit() {
		this.usuarios = this.UsuarioService.listarTodos();
	}

	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	onExcluir() {
 		this.UsuarioService.excluir(this.idExcluir);
 		this.idExcluir = -1;
 		this.usuarios = this.UsuarioService.listarTodos();
 	}
}
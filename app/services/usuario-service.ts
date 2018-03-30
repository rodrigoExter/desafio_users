import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {

	listarTodos() {
		var usuarios:string = sessionStorage['usuarios'];
		return usuarios ? JSON.parse(usuarios) : [];
	}

	cadastrar(usuario: Usuario) {
		var usuarios:Usuario[] = this.listarTodos();
		usuarios.push(usuario);
		sessionStorage['usuarios'] = JSON.stringify(usuarios);
	}

	atualizar(id: number, usuario: Usuario) {
		var usuarios:Usuario[] = this.listarTodos();
		usuarios[id].nome = usuario.nome;
		usuarios[id].email = usuario.email;
		usuarios[id].cpf = usuario.cpf;
		usuarios[id].telefone = usuario.telefone;
		usuarios[id].funcao = usuario.funcao;
		usuarios[id].perfil = usuario.perfil;
		usuarios[id].habilitado = usuario.habilitado;
		sessionStorage['usuarios'] = JSON.stringify(usuarios);
	}

	excluir(id: number) {
		var usuarios:Usuario[] = this.listarTodos();
		usuarios.splice(id, 1);
		sessionStorage['usuarios'] = JSON.stringify(usuarios);
	}

	buscarPorId(id: number) {
		var usuarios:Usuario[] = this.listarTodos();
		return usuarios[id];
	}
}
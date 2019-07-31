import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { UsuarioEntity } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(UsuarioEntity)
  private readonly _usuariosRepository: Repository<UsuarioEntity>, ) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  crear(nuevoUsuario?: UsuarioEntity): Promise<UsuarioEntity> {
    const objetoEntidad = this._usuariosRepository.create(nuevoUsuario);
    return this._usuariosRepository.save(objetoEntidad);
  }

  buscarTodo(parametrosBusqueda?): Promise<UsuarioEntity[]> {
    return this._usuariosRepository.find(parametrosBusqueda);
  }

  actualizar(usuarioActualizado): Promise<UsuarioEntity> {
    return this._usuariosRepository.save(usuarioActualizado);
  }

  eliminar(usuarioEliminado) {
    return this._usuariosRepository.delete(usuarioEliminado);
  }

  getUserById(idProducto): Promise<UsuarioEntity> {
    return this._usuariosRepository.findOne(idProducto);
  }

}

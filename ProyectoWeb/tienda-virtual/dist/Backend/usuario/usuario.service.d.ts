import { Repository } from "typeorm";
import { UsuarioEntity } from './usuario.entity';
export declare class UsuarioService {
    private readonly _usuariosRepository;
    constructor(_usuariosRepository: Repository<UsuarioEntity>);
    getHello(): string;
    crear(nuevoUsuario?: UsuarioEntity): Promise<UsuarioEntity>;
    buscarTodo(parametrosBusqueda?: any): Promise<UsuarioEntity[]>;
    actualizar(usuarioActualizado: any): Promise<UsuarioEntity>;
    eliminar(usuarioEliminado: any): Promise<import("typeorm").DeleteResult>;
    getUserById(idProducto: any): Promise<UsuarioEntity>;
}

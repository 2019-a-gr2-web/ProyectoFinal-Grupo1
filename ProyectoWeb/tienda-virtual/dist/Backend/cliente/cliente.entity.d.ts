import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";
export declare class UsuarioEntity {
    idUsuario: number;
    nombre: string;
    apellido: string;
    username: string;
    identificacion: string;
    direccion: string;
    password: string;
    usuarioRol: UsuarioRolEntity[];
}

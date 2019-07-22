import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";
export declare class ClienteEntity {
    idCliente: number;
    nombreCliente: string;
    apellidoCliente: string;
    nombreUsuario: string;
    contraseña: string;
    usuarioRol: UsuarioRolEntity[];
}

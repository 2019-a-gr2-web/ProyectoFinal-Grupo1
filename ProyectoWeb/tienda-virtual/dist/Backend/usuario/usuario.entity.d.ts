import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";
import { PedidoEntity } from "../pedido/pedido.entity";
export declare class UsuarioEntity {
    idUsuario: number;
    nombre: string;
    apellido: string;
    identificacion: string;
    direccion: string;
    username: string;
    password: string;
    rol: 'Administrador' | 'Cliente' | 'Bodeguero';
    usuarioRol: UsuarioRolEntity[];
    usuarioPedido: PedidoEntity[];
}

import { ClienteEntity } from "../cliente/cliente.entity";
import { RolEntity } from "../rol/rol.entity";
export declare class UsuarioRolEntity {
    id: number;
    usuario: ClienteEntity;
    rol: RolEntity;
}

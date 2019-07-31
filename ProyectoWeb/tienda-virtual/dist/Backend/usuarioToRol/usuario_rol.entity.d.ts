import { RolEntity } from "../rol/rol.entity";
import { UsuarioEntity } from "../usuario/usuario.entity";
export declare class UsuarioRolEntity {
    id: number;
    usuario: UsuarioEntity;
    rol: RolEntity;
}

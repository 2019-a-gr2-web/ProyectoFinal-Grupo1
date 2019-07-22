import { RolEntity } from "../rol/rol.entity";
export declare class ClienteEntity {
    idCliente: number;
    nombreCliente: string;
    apellidoCliente: string;
    nombreUsuario: string;
    contraseña: string;
    roles: RolEntity[];
}

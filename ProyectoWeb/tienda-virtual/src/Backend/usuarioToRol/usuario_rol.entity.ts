import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClienteEntity } from "../cliente/cliente.entity";
import { RolEntity } from "../rol/rol.entity";

@Entity('usuario_rol')
export class UsuarioRolEntity{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    public id!: number;

    
    @ManyToOne(type => ClienteEntity, cliente => cliente.usuarioRol)
    public usuario!: ClienteEntity;

   
    @ManyToOne(type => RolEntity, rol => rol.usuarioRol)
    public rol!: RolEntity;
}
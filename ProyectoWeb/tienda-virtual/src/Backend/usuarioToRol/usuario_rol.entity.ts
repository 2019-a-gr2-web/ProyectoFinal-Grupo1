import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RolEntity } from "../rol/rol.entity";
import { UsuarioEntity } from "../usuario/usuario.entity";

@Entity('usuario_rol')
export class UsuarioRolEntity{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    public id!: number;

    
    @ManyToOne(type => UsuarioEntity, usuario => usuario.usuarioRol)
    public usuario!: UsuarioEntity;

   
    @ManyToOne(type => RolEntity, rol => rol.usuarioRol)
    public rol!: RolEntity;
}
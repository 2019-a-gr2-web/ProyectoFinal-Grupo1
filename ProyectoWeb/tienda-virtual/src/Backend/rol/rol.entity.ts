import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";

@Entity('bd_rol') // Nombre tabla
export class RolEntity {

    @PrimaryGeneratedColumn({
        name: 'id_rol',
    })
    idRol: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'tipo_rol',
    })
    tipoRol: string;

    @OneToMany((type) => UsuarioRolEntity, (usuarioRol) => usuarioRol.rol)
    public usuarioRol!: UsuarioRolEntity[];
}
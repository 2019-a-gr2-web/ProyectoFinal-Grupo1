import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,ManyToMany,JoinTable } from "typeorm";
import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";

@Entity('bd_cliente') // Nombre tabla
export class ClienteEntity {

    @PrimaryGeneratedColumn({
        name: 'id_cliente',
    })
    idCliente: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_cliente',
    })
    nombreCliente: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        name: 'apellido_cliente',
    })
    apellidoCliente: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_usuario',
    })
    nombreUsuario: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'contraseña',
    })
    contraseña: string;

    @OneToMany((type) => UsuarioRolEntity, (usuarioRol) => usuarioRol.usuario)
    public usuarioRol!: UsuarioRolEntity[];
}
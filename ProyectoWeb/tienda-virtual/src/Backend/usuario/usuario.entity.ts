import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UsuarioRolEntity } from "../usuarioToRol/usuario_rol.entity";
import { PedidoEntity } from "../pedido/pedido.entity";

@Entity('bd_usuario') // Nombre tabla
export class UsuarioEntity {

    @PrimaryGeneratedColumn({
        name: 'id_cliente',
    })
    idUsuario: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre',
    })
    nombre: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'apellido',
    })
    apellido: string;
    @Column({
        type: 'varchar',
        length: 32,
        name: 'identificacion',
    })
    identificacion: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'direccion',
    })
    direccion: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'username',
    })
    username: string;
    @Column({
        type: 'varchar',
        length: 32,
        name: 'password',
    })
    password: string;

    
    @Column({
        type: 'varchar',
        length: 32,
        name: 'rol',
        default: 'Cliente',
    })
    rol: 'Administrador'|'Cliente'|'Bodeguero';

    @OneToMany((type) => UsuarioRolEntity, (usuarioRol) => usuarioRol.usuario)
    public usuarioRol!: UsuarioRolEntity[];

    @OneToMany((type) => PedidoEntity, (pedido) => pedido.usuario)
    public usuarioPedido!: PedidoEntity[];


}
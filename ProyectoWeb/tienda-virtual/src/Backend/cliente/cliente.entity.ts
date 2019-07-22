import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,ManyToMany,JoinTable } from "typeorm";
import { RolEntity } from "../rol/rol.entity";

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
    

   /* @ManyToOne(type => TipoEntity, tipo => tipo.producto)
    tipoId: TipoEntity;


    @OneToMany(type => BodegaProductoEntity, bodegaProducto => bodegaProducto)
    bodegaProductos: BodegaProductoEntity[]

    @OneToMany(type => BodegaProductoEntity, bodegaProducto => bodegaProducto)
    bodegaProductos: BodegaProductoEntity[]*/

    @ManyToMany(type => RolEntity)
    @JoinTable()
    roles: RolEntity[];

}
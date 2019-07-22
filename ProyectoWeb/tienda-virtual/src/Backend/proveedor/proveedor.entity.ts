import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bd_proveedor') // Nombre tabla
export class ProveedorEntity {

    @PrimaryGeneratedColumn()
    idProveedor: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_proveedor',
    })
    nombreProveedor: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'direccion_proveedor',
    })
    direccionProveedor: string;

    @Column({
        type: 'varchar',
        name: 'telefono_proveedor',
    })
    telefonoProveedor: string;

}
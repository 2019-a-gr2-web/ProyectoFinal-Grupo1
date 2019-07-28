import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('bd_bodega') // Nombre tabla
export class BodegaEntity {

    @PrimaryGeneratedColumn({
        name: 'id_bodega',
    })
    idBodega: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_bodega',
    })
    nombreBodega: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'direccion_bodega',
    })
    direccionBodega: string;

}
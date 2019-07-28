import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoEntity } from "../producto/producto.entity";

@Entity('bd_tipo') // Nombre tabla
export class TipoEntity {

    @PrimaryGeneratedColumn({
        name: 'id_tipo',
    })
    idTipo: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_tipo',
    })
    nombreTipo: string;

}
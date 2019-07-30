import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetalleEntity } from "../productoToPedido/producto_pedido.entity";

@Entity('bd_producto') // Nombre tabla
export class ProductoEntity {
    
    @PrimaryGeneratedColumn({
        name: 'id_producto',
    })
    idProducto: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'nombre_producto',
    })
    nombreProducto: string;

    @Column({
        type: 'varchar',
        length: 100,
        name: 'descripcion_producto',
    })
    descripcion: string;

    @Column({
        type: 'varchar',
        name: 'codigo_producto',
    })
    codigoProducto: string;

    @Column({
        type: 'decimal',
        name: 'precio_venta_publico',
        precision: 10,
        scale: 2,
        default: '0',
    })
    PVP: any;


    @Column({
        type: 'longtext',
        name: 'imagen_producto',
    })
    imagenProducto: any;

    @Column({
        type: 'varchar',
        length: "10",
        name: 'tipo',
    })
    tipo: 'Hombre'|'Mujer'|'Niño';

   /* @ManyToOne(type => TipoEntity, tipo => tipo.producto)
    tipoId: TipoEntity; 
     @OneToMany(type => BodegaProductoEntity, bodegaProducto => bodegaProducto)
    bodegaProductos: BodegaProductoEntity[]
    */
    @OneToMany(type => DetalleEntity, (productoPedido) => productoPedido.producto)
    productoPedido: DetalleEntity[]

   

}
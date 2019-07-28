import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PedidoEntity } from "../pedido/pedido.entity";
import { ProductoEntity } from "../producto/producto.entity";

@Entity('producto_pedido')
export class ProductoPedidoEntity{
    @PrimaryGeneratedColumn({
        name:'id_detalle'
    })
    public idDetalle!: number;

    @Column({
        type: 'decimal',
        name: 'cantidad_producto',
        precision: 10,
        scale: 2,
        default: '0',
    })
    cantidadProducto: number;

    @Column({
        type: 'decimal',
        name: 'precio_detalle',
        precision: 10,
        scale: 2,
        default: '0',
    })
    precioDetalle: number;

   

    @ManyToOne(type => ProductoEntity, producto => producto.productoPedido)
    public producto!: ProductoEntity;

   
    @ManyToOne(type => PedidoEntity, pedido => pedido.productoPedido)
    public pedido!: PedidoEntity;
}
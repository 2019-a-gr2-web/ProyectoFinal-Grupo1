import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductoPedidoEntity } from "../productoToPedido/producto_pedido.entity";

@Entity('bd_pedido') // Nombre tabla
export class PedidoEntity {

    @PrimaryGeneratedColumn({
        name: 'id_pedido',
    })
    idPedido: number;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'direccion_cliente',
    })
    direccionCliente: string;

    @Column({
        type: 'varchar',
        length: 32,
        name: 'identificacion',
    })
    identificacion: string;

    @Column({
        type: 'decimal',
        name: 'subtotal',
        precision: 10,
        scale: 2,
        default: '0',
    })
    subtotal: number;

    @Column({
        type: 'decimal',
        name: 'total',
        precision: 10,
        scale: 2,
        default: '0',
    })
    total: number;

    @Column({
        type: 'date',
        name: 'fecha',
        default: '2019-06-19'
    })
    fecha: Date;

    @Column({
        type: 'varchar',
        length: "10",
        name: 'estado',
    })
    estado: 'Por Despachar'|'Iniciado'|'Despachado'|'Cancelado';
    
    @OneToMany(type => ProductoPedidoEntity, (productoPedido) => productoPedido.pedido)
    productoPedido: ProductoPedidoEntity[]
}
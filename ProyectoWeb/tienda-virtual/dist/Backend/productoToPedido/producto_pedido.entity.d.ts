import { PedidoEntity } from "../pedido/pedido.entity";
import { ProductoEntity } from "../producto/producto.entity";
export declare class ProductoPedidoEntity {
    idDetalle: number;
    cantidadProducto: number;
    precioDetalle: number;
    producto: ProductoEntity;
    pedido: PedidoEntity;
}

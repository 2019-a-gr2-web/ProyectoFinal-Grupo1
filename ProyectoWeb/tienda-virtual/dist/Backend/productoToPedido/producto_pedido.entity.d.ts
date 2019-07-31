import { PedidoEntity } from "../pedido/pedido.entity";
import { ProductoEntity } from "../producto/producto.entity";
export declare class DetalleEntity {
    idDetalle: number;
    cantidadProducto: number;
    precioDetalle: number;
    productoId: number;
    producto: ProductoEntity;
    pedido: PedidoEntity;
}

import { ProductEntity } from "dist/Backend/producto/product.entity";
import { PedidoEntity } from "../pedido/pedido.entity";
export interface Detalle {
    idDetalle?: number;
    cantidadProducto?: number;
    precioDetalle?: number;
    producto: ProductEntity;
    pedido: PedidoEntity;
    productoId: number;
}

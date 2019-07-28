import { ProductEntity } from "dist/Backend/producto/product.entity";
import { PedidoEntity } from "../pedido/pedido.entity";
export declare class ProductoPedidoEntity {
    idDetalle: number;
    cantidadProducto: number;
    precioDetalle: number;
    producto: ProductEntity;
    pedido: PedidoEntity;
}

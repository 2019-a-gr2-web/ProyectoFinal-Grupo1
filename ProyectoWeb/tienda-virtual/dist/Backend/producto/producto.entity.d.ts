import { ProductoPedidoEntity } from "../productoToPedido/producto_pedido.entity";
export declare class ProductoEntity {
    idProducto: number;
    nombreProducto: string;
    descripcion: string;
    codigoProducto: string;
    PVP: number;
    imagenProducto: any;
    productoPedido: ProductoPedidoEntity[];
}

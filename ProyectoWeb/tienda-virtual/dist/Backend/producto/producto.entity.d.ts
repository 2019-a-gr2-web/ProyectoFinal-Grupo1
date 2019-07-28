import { DetalleEntity } from "../productoToPedido/producto_pedido.entity";
export declare class ProductoEntity {
    idProducto: number;
    nombreProducto: string;
    descripcion: string;
    codigoProducto: string;
    PVP: any;
    imagenProducto: any;
    tipo: 'Hombre' | 'Mujer' | 'Niño';
    productoPedido: DetalleEntity[];
}

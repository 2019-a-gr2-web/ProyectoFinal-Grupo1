import { DetalleEntity } from "../productoToPedido/producto_pedido.entity";
export declare class PedidoEntity {
    idPedido: number;
    direccionCliente: string;
    identificacion: string;
    subtotal: number;
    total: number;
    fecha: Date;
    estado: 'PorDespachar' | 'Iniciado' | 'Despachado' | 'Cancelado';
    productoPedido: DetalleEntity[];
}

import { DetalleEntity } from "../productoToPedido/producto_pedido.entity";
import { UsuarioEntity } from "../usuario/usuario.entity";
export declare class PedidoEntity {
    idPedido: number;
    nombreCliente: string;
    direccionCliente: string;
    identificacion: string;
    subtotal: number;
    total: number;
    fecha: Date;
    estado: 'PorDespachar' | 'Iniciado' | 'Despachado' | 'Cancelado';
    productoPedido: DetalleEntity[];
    usuario: UsuarioEntity;
}

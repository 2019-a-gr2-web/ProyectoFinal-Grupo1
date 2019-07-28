export interface Pedido {
    idPedido?: number;
    direccionCliente: string;
    identificacion: string;
    subtotal: number;
    total: number;
    fecha: Date;
    estado: 'PorDespachar' | 'Iniciado' | 'Despachado' | 'Cancelado';
}

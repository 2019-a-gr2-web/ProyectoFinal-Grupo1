export interface Pedido {
    idPedido?: number;
    nombreCliente?: string;
    direccionCliente?: string;
    identificacion: string;
    subtotal?: number;
    total?: number;
    fecha?: Date;
    estado?: 'PorDespachar' | 'Iniciado' | 'Despachado' | 'Cancelado';
    idCliente?: number;
}

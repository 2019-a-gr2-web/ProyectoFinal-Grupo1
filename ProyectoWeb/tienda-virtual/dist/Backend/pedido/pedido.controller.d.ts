import { PedidoService } from './pedido.service';
export declare class PedidoController {
    private readonly _pedidoService;
    constructor(_pedidoService: PedidoService);
    getHello(): string;
    crearPedido(res: any, req: any, idProducto: number): Promise<void>;
}

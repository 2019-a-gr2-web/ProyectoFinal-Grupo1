import { PedidoService } from './pedido.service';
import { DetalleService } from '../productoToPedido/producto_pedido.service';
import { ProductoService } from '../producto/producto.service';
export declare class PedidoController {
    private readonly _pedidoService;
    private readonly _productoService;
    private readonly _detalleService;
    constructor(_pedidoService: PedidoService, _productoService: ProductoService, _detalleService: DetalleService);
    getHello(): string;
    crearPedido(res: any, req: any, session: any): Promise<void>;
    mostartMesajeExito(res: any, pedido: string): void;
    verCarrito(res: any, session: any): Promise<string>;
    facturaGenerada(res: any): void;
}

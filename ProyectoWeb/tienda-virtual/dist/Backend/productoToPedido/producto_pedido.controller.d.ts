import { DetalleService } from './producto_pedido.service';
export declare class DetalleController {
    private readonly _detalleService;
    constructor(_detalleService: DetalleService);
    getAllProducts(res: any): Promise<void>;
    crearDetalle(): Promise<void>;
}

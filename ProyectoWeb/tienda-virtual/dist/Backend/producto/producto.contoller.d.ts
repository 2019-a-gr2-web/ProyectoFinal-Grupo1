import { ProductoService } from './producto.service';
export declare class ProductoController {
    private readonly _productoService;
    constructor(_productoService: ProductoService);
    getHello(): string;
    loginVista(res: any): void;
    helloWorld(): string;
}

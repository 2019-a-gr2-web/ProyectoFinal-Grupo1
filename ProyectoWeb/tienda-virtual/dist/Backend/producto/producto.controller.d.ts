import { ProductoService } from './producto.service';
export declare class ProductoController {
    private readonly _productoService;
    constructor(_productoService: ProductoService);
    getHello(): string;
    loginVista(res: any): void;
    helloWorld(): string;
    getAllProducts(res: any): Promise<void>;
    deleteProduct(res: any, producto: any): Promise<void>;
    deleteProductGet(res: any, req: any): Promise<void>;
    editarProductGet(res: any, req: any): Promise<void>;
    createProductGet(res: any, req: any): Promise<void>;
}

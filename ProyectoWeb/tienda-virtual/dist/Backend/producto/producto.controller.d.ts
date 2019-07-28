import { ProductoService } from './producto.service';
import { Producto } from './producto';
export declare class ProductoController {
    private readonly _productoService;
    constructor(_productoService: ProductoService);
    getHello(): string;
    loginVista(res: any): void;
    helloWorld(): string;
    getAllProducts(res: any): Promise<void>;
    getAllProductsHome(res: any): Promise<void>;
    deleteProduct(res: any, producto: any): Promise<void>;
    deleteProductGet(res: any, req: any): Promise<void>;
    editarProductGet(res: any, req: any): Promise<void>;
    createProductGet(res: any, req: any): Promise<void>;
    createProductPost(res: any, producto: Producto): Promise<void>;
    getProductDescription(res: any, req: any): Promise<void>;
}

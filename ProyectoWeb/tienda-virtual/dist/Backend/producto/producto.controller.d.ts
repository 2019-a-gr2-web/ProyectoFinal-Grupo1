import { ProductoService } from './producto.service';
import { Producto } from './producto';
export declare class ProductoController {
    private readonly _productoService;
    constructor(_productoService: ProductoService);
    getAllProducts(res: any, session: any): Promise<void>;
    getAllProductsHome(res: any, session: any, tipo?: string): Promise<void>;
    deleteProduct(res: any, producto: any): Promise<void>;
    deleteProductGet(res: any, req: any): Promise<void>;
    editarProductGet(res: any, req: any): Promise<void>;
    createProductGet(res: any, req: any): Promise<void>;
    createProductPost(res: any, producto: Producto): Promise<void>;
    getProductDescription(res: any, req: any): Promise<void>;
}

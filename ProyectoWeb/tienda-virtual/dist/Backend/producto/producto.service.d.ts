import { Producto } from './producto';
import { ProductoEntity } from './producto.entity';
import { Repository } from "typeorm";
export declare class ProductoService {
    private readonly _productosRepository;
    bddProductos: Producto[];
    constructor(_productosRepository: Repository<ProductoEntity>);
    getHello(): string;
    crear(nuevoProducto?: Producto): Promise<Producto>;
    buscarTodo(parametrosBusqueda?: any): Promise<ProductoEntity[]>;
    actualizar(productoActualizado: any): Promise<ProductoEntity>;
    eliminar(productoEliminado: any): Promise<import("typeorm").DeleteResult>;
    getProductById(idProducto: any): Promise<ProductoEntity>;
}

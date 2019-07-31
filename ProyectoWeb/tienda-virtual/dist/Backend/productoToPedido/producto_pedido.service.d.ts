import { Repository } from "typeorm";
import { DetalleEntity } from './producto_pedido.entity';
export declare class DetalleService {
    private readonly _detalleRepository;
    constructor(_detalleRepository: Repository<DetalleEntity>);
    getHello(): string;
    crear(nuevoDetalle?: DetalleEntity): Promise<DetalleEntity>;
    buscarTodo(parametrosBusqueda?: any): Promise<DetalleEntity[]>;
    actualizar(productoActualizado: any): Promise<DetalleEntity>;
    eliminar(productoEliminado: any): Promise<import("typeorm").DeleteResult>;
    getDetailById(idDetalle: any): Promise<DetalleEntity>;
}

import { Repository } from "typeorm";
import { Pedido } from './pedido';
import { PedidoEntity } from './pedido.entity';
export declare class PedidoService {
    private readonly _pedidoRepository;
    bddPedido: Pedido[];
    constructor(_pedidoRepository: Repository<PedidoEntity>);
    getHello(): string;
    buscarPedidoIniciado(parametrosBusqueda?: any): Promise<PedidoEntity>;
    crearPedido(nuevoPedido: Pedido): Promise<PedidoEntity>;
    actualizarPedido(pedidoActualizado: any): Promise<PedidoEntity>;
    eliminarPedido(pedidoEliminado: any): Promise<import("typeorm").DeleteResult>;
    buscarPedidoPorId(parametrosBusqueda?: any): Promise<PedidoEntity>;
}

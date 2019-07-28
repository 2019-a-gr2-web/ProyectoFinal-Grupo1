import { Repository } from "typeorm";
import { Pedido } from './pedido';
import { PedidoEntity } from './pedido.entity';
export declare class PedidoService {
    private readonly _pedidoRepository;
    bddPedido: Pedido[];
    constructor(_pedidoRepository: Repository<PedidoEntity>);
    getHello(): string;
}

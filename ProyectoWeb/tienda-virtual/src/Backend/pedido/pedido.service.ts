import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Pedido } from './pedido';
import { PedidoEntity } from './pedido.entity';

@Injectable()
export class PedidoService {

  bddPedido: Pedido[] = [];

  constructor(@InjectRepository(PedidoEntity)
  private readonly _pedidoRepository: Repository<PedidoEntity>, ) {

  
  }

  getHello(): string {
    return 'Hello World!';
  }

}

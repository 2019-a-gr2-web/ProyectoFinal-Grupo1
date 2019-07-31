import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, createQueryBuilder } from "typeorm";
import { Pedido } from './pedido';
import { PedidoEntity } from './pedido.entity';
import { userInfo } from 'os';

@Injectable()
export class PedidoService {

  bddPedido: Pedido[] = [];

  constructor(@InjectRepository(PedidoEntity)
  private readonly _pedidoRepository: Repository<PedidoEntity>) {
  }
  getHello(): string {
    return 'Hello World!';
  }
  buscarPedidoIniciado(parametrosBusqueda?): Promise<PedidoEntity> {
    return this._pedidoRepository.findOne(parametrosBusqueda);
  }
  crearPedido(nuevoPedido: Pedido): Promise<PedidoEntity> {
    const objetoEntidad = this._pedidoRepository.create(nuevoPedido);
    return this._pedidoRepository.save(objetoEntidad);
  }
  actualizarPedido(pedidoActualizado): Promise<PedidoEntity> {
    return this._pedidoRepository.save(pedidoActualizado);
  }
  eliminarPedido(pedidoEliminado) {
    return this._pedidoRepository.delete(pedidoEliminado);
  }
  buscarPedidoPorId(parametrosBusqueda?): Promise<PedidoEntity> {
    return this._pedidoRepository.findOne(parametrosBusqueda);
  }
  buscarPedidoPorUsuario(parametrosBusqueda?): Promise<PedidoEntity[]> {
    return this._pedidoRepository.find(parametrosBusqueda);
  }
}

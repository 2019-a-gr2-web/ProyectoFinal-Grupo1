import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DetalleEntity } from './producto_pedido.entity';
import { Detalle } from './producto_pedido';

@Injectable()
export class DetalleService {

  //bddProductos: Producto[] = [];

  constructor(@InjectRepository(DetalleEntity)
  private readonly _detalleRepository: Repository<DetalleEntity> ) {
  }

  getHello(): string {
    return 'Hello World!';
  }

  crear(nuevoDetalle?: Detalle): Promise<DetalleEntity> {
    const objetoEntidad = this._detalleRepository.create(nuevoDetalle);
    return this._detalleRepository.save(objetoEntidad);
  }

  buscarTodo(parametrosBusqueda?): Promise<DetalleEntity[]> {
    return this._detalleRepository.find(parametrosBusqueda);
  }

  actualizar(productoActualizado): Promise<DetalleEntity> {
    return this._detalleRepository.save(productoActualizado);
  }

  eliminar(productoEliminado) {
    return this._detalleRepository.delete(productoEliminado);
  }

  getDetailById(idDetalle): Promise<DetalleEntity> {
    return this._detalleRepository.findOne(idDetalle);
  }
}

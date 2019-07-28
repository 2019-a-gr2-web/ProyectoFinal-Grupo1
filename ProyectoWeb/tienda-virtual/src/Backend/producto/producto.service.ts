import { Injectable } from '@nestjs/common';
import { Producto } from './producto';
import { InjectRepository } from "@nestjs/typeorm";
import { ProductoEntity } from './producto.entity';
import { Repository } from "typeorm";

@Injectable()
export class ProductoService {

  bddProductos: Producto[] = [];

  constructor(@InjectRepository(ProductoEntity)
  private readonly _productosRepository: Repository<ProductoEntity>, ) {

    const producto: Producto = {
      //idProducto: 2,
      nombreProducto: 'Producto 1',
      descripcion: 'Producto 1',
      codigoProducto: 'Producto 1',
      PVP: 25.20,
      imagenProducto:'',
      tipo:'Hombre'
    };
    this.crear(producto);
    const respuestaUpdate = this.buscarTodo();
    respuestaUpdate
      .then(
        (datos) => {
          this.bddProductos = datos;
          //console.log('Base', datos);
        })
      .catch((error) => {
        console.error('Error:', error);
      })
  }

  getHello(): string {
    return 'Hello World!';
  }

  crear(nuevoProducto?: Producto): Promise<Producto> {
    const objetoEntidad = this._productosRepository.create(nuevoProducto);
    return this._productosRepository.save(objetoEntidad);
  }

  buscarTodo(parametrosBusqueda?): Promise<ProductoEntity[]> {
    return this._productosRepository.find(parametrosBusqueda);
  }

  actualizar(productoActualizado): Promise<ProductoEntity> {
    return this._productosRepository.save(productoActualizado);
  }

  eliminar(productoEliminado) {
    return this._productosRepository.delete(productoEliminado);
  }

  getProductById(idProducto): Promise<ProductoEntity> {
    return this._productosRepository.findOne(idProducto);
  }
}

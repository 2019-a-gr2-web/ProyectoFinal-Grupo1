import { Controller, Get, Res, Render, Post, Req, Body, Delete, Query } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { DetalleService } from '../productoToPedido/producto_pedido.service';
import { Detalle } from '../productoToPedido/producto_pedido';
import { ProductoService } from '../producto/producto.service';


@Controller('tiendavirtual/pedido')
export class PedidoController {
  constructor(private readonly _pedidoService: PedidoService) {
}

@Get()
getHello(): string {
  return "Hola Producto";
}
@Post('/crear')
async crearPedido(
  @Res() res,
  @Req() req,
  @Query('idProducto') idProducto: number,
  ) {
  const pedido: Pedido = {
    direccionCliente: "Barrio San Carlos",
    identificacion: "1723882039",
    //subtotal: ;
    //total ?: number;
    //fecha ?: Date;
    //estado ?: 'PorDespachar' | 'Iniciado' | 'Despachado' | 'Cancelado';
  }
  const response = await this._pedidoService.crearPedido(pedido);
  console.log(response.idPedido)

  //const producto = await this._productService.getProductById({idProducto:idProducto})
  //console.log(producto)
  /*const detalle: Detalle = {
    idDetalle?: ,
    cantidadProducto:2,
    precioDetalle: ;
    productoIdProducto: number;
    productoIdPedido: number;
  }*/
  //const responseDetalle = await this._detalleService.crear();


}

}
import { Controller, Get, Res, Render, Post, Req, Body, Delete, Query } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { DetalleService } from '../productoToPedido/producto_pedido.service';
import { Detalle } from '../productoToPedido/producto_pedido';
import { ProductoService } from '../producto/producto.service';


@Controller('tiendavirtual/pedido')
export class PedidoController {
  constructor(private readonly _pedidoService: PedidoService,
    private readonly _productoService: ProductoService,
    private readonly _detalleService: DetalleService) {
}

@Get()
getHello(): string {
  return "Hola Producto";
}

@Get('/crear/:idProducto')
async crearPedido(
  @Res() res,
  @Req() req,
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
  console.log(response.idPedido);

  const producto = await this._productoService.getProductById(req.params.idProducto);
  console.log(producto);
  console.log("Producto ID",req.params.idProducto);

  const detalle: Detalle = {
    //idDetalle?: ,
    cantidadProducto:2,
    precioDetalle: producto.PVP * 2,
    producto: producto.idProducto,
    pedido: response.idPedido,
  }
  
  const responseDetalle = await this._detalleService.crear(detalle); 
  console.log(responseDetalle);

  const respon = await this._detalleService.buscarTodo({idDetalle: responseDetalle.idDetalle});
  console.log("Detalles",respon)



}

}
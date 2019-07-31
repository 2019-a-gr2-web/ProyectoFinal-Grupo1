import { Controller, Get, Res, Render, Post, Req, Body, Delete, Session, Query } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido';
import { DetalleService } from '../productoToPedido/producto_pedido.service';
import { Detalle } from '../productoToPedido/producto_pedido';
import { ProductoService } from '../producto/producto.service';
import { DetalleEntity } from '../productoToPedido/producto_pedido.entity';
import { PedidoEntity } from './pedido.entity';


@Controller('/tiendavirtual/pedido')
export class PedidoController {
  constructor(private readonly _pedidoService: PedidoService,
    private readonly _productoService: ProductoService,
    private readonly _detalleService: DetalleService) {
  }

  @Get()
  getHello() {
    return "Hola Producto";
  }

  @Get('/crear/:idProducto')
  async crearPedido(
    @Res() res,
    @Req() req,
    @Session() session,
  ) {

    const existePedidoPendiente = await this._pedidoService.buscarPedidoIniciado({ estado: 'Iniciado' });
    const productoActual = await this._productoService.getProductById({ idProducto: req.params.idProducto })
    if (existePedidoPendiente) {
      const detalle: DetalleEntity = {
        idDetalle: 0,
        cantidadProducto: 2,
        precioDetalle: productoActual.PVP * 2,
        producto: productoActual,
        pedido: existePedidoPendiente,
        productoId: productoActual.idProducto,
      }

      const respuestaDetalle = await this._detalleService.crear(detalle);
      console.log(respuestaDetalle);

      res.redirect('/tiendavirtual/pedido/modal?pedido=' + existePedidoPendiente.idPedido)
    } else {
      console.log(session);
      const pedido: Pedido = {
        identificacion: session.identificacion,
        nombreCliente: session.nombre,
        direccionCliente: session.direccion,
        //subtotal?: number;
        //total?: number;
        //fecha?: Date;
        //estado?: 'PorDespachar'|'Iniciado'|'Despachado'|'Cancelado';
      }
      const response = await this._pedidoService.crearPedido(pedido);

      const detalle: DetalleEntity = {
        idDetalle: 0,
        cantidadProducto: 2,
        precioDetalle: productoActual.PVP * 2,
        producto: productoActual,
        pedido: response,
        productoId: productoActual.idProducto,
      }

      const respuestaDetalle = await this._detalleService.crear(detalle);

      res.redirect('/tiendavirtual/pedido/modal?pedido=' + response.idPedido)
    }

  }

  @Get('modal')
  mostartMesajeExito(@Res() res, @Query('pedido') pedido: string) {
    res.render('vistas_pedido/confirmarCompra', {
      idPedido: pedido,
    })
  }

  @Get('vercarrito')
  async verCarrito(@Res() res, @Session() session) {
    const existePedidoPendiente = await this._pedidoService.buscarPedidoIniciado({ estado: 'Iniciado' });
   // console.log(existePedidoPendiente)
    if (existePedidoPendiente) {
      const detallesDelPedidoActual = await this._detalleService.buscarTodo({ pedido: existePedidoPendiente });
      const productoPorDetalle = [];
      detallesDelPedidoActual.forEach(detalle => {
        productoPorDetalle.push(detalle.productoId);
      });

      const productos = await this._productoService.buscarPorId(productoPorDetalle);
      res.render('vistas_pedido/verCarrito', {
        detalles: detallesDelPedidoActual,
        listaDeProductos: productos,
        usuario: session,
        pedido: existePedidoPendiente, 
      })
    } else {
      return "No exiten Productos"
    }
  }

  @Get('facturagenerada')
  facturaGenerada(@Res() res) {
    res.render('vistas_factura/facturaGenerada')
  }

  @Get('pagarfactura/:idProducto')
  async pagarFactura(@Res() res, @Req() req){
    const idPedido = req.params.idProducto
    const responsePedido =  await this._pedidoService.buscarPedidoPorId({idPedido:idPedido})
    responsePedido.estado = 'PorDespachar';
    
    console.log(responsePedido)

  }
}
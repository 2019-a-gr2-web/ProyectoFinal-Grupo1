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

    const existePedidoPendiente = await this._pedidoService.buscarPedidoIniciado({ estado: 'Iniciado' });
    console.log(existePedidoPendiente);

    if (existePedidoPendiente) {
      
    } else {
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
    }
  }
}
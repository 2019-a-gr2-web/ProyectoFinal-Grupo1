import { Controller, Get, Res, Render, Post, Req, Body, Delete } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { PedidoService } from './pedido.service';


@Controller('tiendavirtual/pedido')
export class PedidoController {
  constructor(private readonly _pedidoService: PedidoService) { }

  @Get()
  getHello(): string {
    return "Hola Producto";
  }

}
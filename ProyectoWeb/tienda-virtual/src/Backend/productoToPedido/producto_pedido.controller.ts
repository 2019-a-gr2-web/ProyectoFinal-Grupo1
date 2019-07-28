import { Controller, Get, Res, Render, Post, Req, Body, Delete, Query } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { DetalleService } from './producto_pedido.service';


@Controller('tiendavirtual/detalle')
export class DetalleController {
  constructor(private readonly _detalleService: DetalleService) { }

  @Get()
  getHello(): string {
    return "Hola Producto";
  }
  @Post('/crear')
  async crearDetalle(){

  }
}
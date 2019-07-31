import { Controller, Get, Res, Render, Post, Req, Body, Delete, Query } from '@nestjs/common';
import { async } from 'rxjs/internal/scheduler/async';
import { DetalleService } from './producto_pedido.service';


@Controller('tiendavirtual/detalle')
export class DetalleController {
  constructor(private readonly _detalleService: DetalleService) { }

  @Get('/factura')
  async getAllProducts(@Res() res) {
    //const productsList = await this._productoService.buscarTodo();
    res.render('vistas_factura/gestion_factura');
  }
  @Post('/crear')
  async crearDetalle(){

  }
  @Get('borrardetalle/:idDetalle')
  async borrardetalle(@Res() res, @Req() req) {
  
    const buscarDetalle = await this._detalleService.buscarTodo({idDetalle:req.params.idDetalle})
    const productsList = await this._detalleService.eliminar(buscarDetalle);
    res.redirect('/tiendavirtual/pedido/vercarrito');
  }
}
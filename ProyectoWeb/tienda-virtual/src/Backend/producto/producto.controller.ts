import { Controller, Get, Res, Render, Post, Req, Body, Delete } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { async } from 'rxjs/internal/scheduler/async';


@Controller('tiendavirtual/producto')
export class ProductoController {
  constructor(private readonly _productoService: ProductoService) { }

  @Get()
  getHello(): string {
    return "Hola Producto";
  }

  @Get('/login')
  loginVista(
    @Res() res
  ) {
    res.render('vistas_login/login');
  }

  @Get('/hello-world')  // METODO HTTP
  helloWorld(): string {
    return 'Hello world';
  }

  @Get('/all')
  async getAllProducts(@Res() res){
    const productsList = await this._productoService.buscarTodo();
    res.render('vistas_producto/main-view',
    {
      productos : productsList,
    });
  }

  @Post('/delete')
  async deleteProduct(@Res() res, @Body('producto') producto) {

    await this._productoService.eliminar(producto);
    res.redirect('/tiendavirtual/producto/all')
  }

  @Get('/delete/:idProducto')
  async deleteProductGet(@Res() res, @Req() req) {

    await this._productoService.eliminar(req.params.idProducto);
    res.redirect('/tiendavirtual/producto/all')
  }

  @Get('/update/:idProducto')
  async editarProductGet(@Res() res, @Req() req) {

    //await this._productoService.eliminar(req.params.idProducto);
    res.redirect('/tiendavirtual/producto/all')
  }

  @Get('/create')
  async createProductGet(@Res() res, @Req() req) {

    //await this._productoService.eliminar(req.params.idProducto);
    res.render('vistas_producto/new')
  }

  
}
import { Controller, Get, Res, Render, Post, Req, Body, Delete, Query } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { async } from 'rxjs/internal/scheduler/async';
import { Producto } from './producto';


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
  async getAllProducts(@Res() res, @Query('tipo') tipo: string, ) {
    console.log(tipo)
    const productsList = await this._productoService.buscarTodo();
    const productsListFilter = await this._productoService.buscarTodo({ tipo: tipo });
    console.log(productsListFilter);

    res.render('vistas_producto/main-view',
      {
        productos: productsList,
        productosFiltrados: productsListFilter,
      });
  }
  /*
  @Get('/all/hombre')
  async getAllProductsMan(@Res() res) {
    const productsList = await this._productoService.buscarTodo({tipo:'Hombre'});
    const productsListHombre = await this._productoService.buscarTodo();
    res.render('vistas_producto/home',
      {
        productos: productsList,
        productosEncontrados: productsListHombre,
      });
  }
  @Get('/all/mujer')
  async getAllProductsWomen(@Res() res) {
    const productsList = await this._productoService.buscarTodo();
    const productsListMujer = await this._productoService.buscarTodo({tipo:'Mujer'});
    res.render('vistas_producto/home',
      {
        productos: productsList,
        productosEncontrados: productsListMujer,
      });
  }
  @Get('/all/ninio')
  async getAllProductsChild(@Res() res) {
    const productsList = await this._productoService.buscarTodo();
    const productsListNinios = await this._productoService.buscarTodo({tipo:'Niño'});
    res.render('vistas_producto/home',
      {
        productos: productsList,
        productosEncontrados: productsListNinios,
      });
  }*/
  @Get('/Home')
  async getAllProductsHome(@Res() res, @Query('tipo') tipo?:string, ) {
    console.log(tipo)
    const productsList = await this._productoService.buscarTodo();
    var productsListFilter = await this._productoService.buscarTodo({ tipo: tipo });

    res.render('vistas_producto/home',
      {
        productos: productsList,
        productosFiltrados: productsListFilter,
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
    res.render('vistas_producto/new')
  }

  @Post('/create')
  async createProductPost(
    @Res() res,
    @Body() producto: Producto,
  ) {
    producto.nombreProducto = producto.nombreProducto;
    producto.descripcion = producto.descripcion;
    producto.codigoProducto = producto.codigoProducto;
    producto.PVP = producto.PVP;
    producto.imagenProducto = producto.imagenProducto;
    await this._productoService.crear(producto);
    res.redirect('/tiendavirtual/producto/all')
  }

  @Get('/ver/:idProducto')
  async getProductDescription(@Res() res, @Req() req) {
    const producto = await this._productoService.getProductById({ idProducto: req.params.idProducto });
    console.log(producto.nombreProducto);
    res.render('vistas_producto/description',
      {
        producto: producto,
      })
  }



  /*
  @Get('/edit')
  async getProductById(@Res() res) {
    const product = await this._productoService.
    res.render('vistas_producto/new')
  }

  @Get('/all')
  async getAllProducts(@Res() res) {
    const productsList = await this._productoService.buscarTodo();
    res.render('vistas_producto/main-view',
      {
        productos: productsList,
      });
  }
*/


}
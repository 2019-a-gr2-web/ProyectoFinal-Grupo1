import { Controller, Get, Res, Render } from '@nestjs/common';
import { ProductoService } from './producto.service';


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

  
}
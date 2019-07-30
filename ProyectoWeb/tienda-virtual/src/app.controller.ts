import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }
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
  @Get()  // METODO HTTP
  homeVista(
    @Res() res
  ) {
    res.redirect('/tiendavirtual/producto/home?tipo=All');
  }
}

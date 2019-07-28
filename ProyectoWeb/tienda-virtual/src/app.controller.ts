import { Controller, Get, Res, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tiendavirtual')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
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

  @Get('/home')  // METODO HTTP
  homeVista(
    @Res() res
  ) {
    res.render('vistas_login/home');
  }
}

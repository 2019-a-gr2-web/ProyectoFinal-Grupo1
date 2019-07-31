import { Controller, Get, Res, Render, Post, Body,Session, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioRolEntity } from './Backend/usuarioToRol/usuario_rol.entity';

@Controller('tiendavirtual')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('login')
  loginVista(
    @Res() res,
    @Query('mensaje') mensaje: string,
  ) {
    res.render('vistas_login/login', {
      mensaje: mensaje,
    })
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

  @Get('protegida')
    protegida(
        @Session() session,
        @Res() res,
    ) {
       if (session.username) {
            res.redirect('/tiendavirtual/producto/home?tipo=All');
        } else {
            res.redirect('/tiendavirtual/login');
        }
    }


    @Get('logout')
    logout(
        @Res() res,
        @Session() session,
    ) {

        session.idUsuario = undefined;
        session.username = undefined;
        session.nombre = undefined;
        session.apellido = undefined;
        session.direccion = undefined;
        session.identificacion = undefined;
        session.destroy();
        res.redirect('/tiendavirtual/login');
    }
}

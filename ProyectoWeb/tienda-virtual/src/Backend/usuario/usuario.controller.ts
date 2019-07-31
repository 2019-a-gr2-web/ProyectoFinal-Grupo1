import { Controller, Get, Res, Render, Post, Req, Session, Body, Delete, Query } from '@nestjs/common';
import { UsuarioService } from './usuario.service';


@Controller('/tiendavirtual/usuario')
export class UsuarioController {
    constructor(private readonly _usuarioService: UsuarioService) {
    }

    @Get()
    getHello() {
        return "Hola Producto";
    }

    @Post('validar')
    async validarCredenciales(
        @Body() usuario,
        @Res() res,
        @Session() session,
    ) {
        const usuarioEncontrado = await this._usuarioService.getUserById({ username: usuario.username });
        console.log(usuarioEncontrado);

        if (usuarioEncontrado) {
            if (usuario.password === usuarioEncontrado.password) {
                
                session.idUsuario = usuarioEncontrado.idUsuario,
                session.username = usuarioEncontrado.username;
                session.nombre = usuarioEncontrado.nombre;
                session.apellido = usuarioEncontrado.apellido;
                session.direccion = usuarioEncontrado.direccion;
                session.identificacion = usuarioEncontrado.identificacion;

                //console.log(session);

                res.redirect('/tiendavirtual/protegida');
            } else {
                res.redirect('/tiendavirtual/login?mensaje=Contraseña Incorrecta')
            }
        }
        else {
            res.redirect('/tiendavirtual/login?mensaje=El Usuario No existe')
        }
    }

    


}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './Backend/producto/producto.entity';
import { BodegaEntity } from './Backend/bodega/bodega.entity';
import { ClienteEntity } from './Backend/cliente/cliente.entity';
import { PedidoEntity } from './Backend/pedido/pedido.entity';
import { ProveedorEntity } from './Backend/proveedor/proveedor.entity';
import { RolEntity } from './Backend/rol/rol.entity';
import { TipoEntity } from './Backend/tipo/tipo.entity';
import { UsuarioRolEntity } from './Backend/usuarioToRol/usuario_rol.entity';
import { ProductoModule } from './Backend/producto/producto.module';
import { ProductoPedidoEntity } from './Backend/productoToPedido/producto_pedido.entity';
import { PedidoModule } from './Backend/pedido/pedido.module';

@Module({
  imports: [ProductoModule,
    PedidoModule,
    TypeOrmModule.forRoot({
      name: 'default', // Nombre cadena conex por defecto de TYPEORM
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'proyecto',
      entities: [
        ProductoEntity,
        BodegaEntity,
        ClienteEntity,
        PedidoEntity,
        ProveedorEntity,
        RolEntity,
        TipoEntity,
        UsuarioRolEntity,
        ProductoPedidoEntity,
      ],
      synchronize: true,
      insecureAuth : true,
      dropSchema: false,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

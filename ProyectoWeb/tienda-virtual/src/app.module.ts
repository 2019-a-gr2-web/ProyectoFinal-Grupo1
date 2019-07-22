import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntity } from './Backend/producto/producto.entity';
import { BodegaEntity } from './Backend/bodega/bodega.entity';
import { ClienteEntity } from './Backend/cliente/cliente.entity';
import { PedidoEntity } from './Backend/pedido/pedido.entity';
import { ProveedorEntity } from './Backend/proveedor/proveedor.entity';
import { RolEntity } from './Backend/rol/rol.entity';
import { TipoEntity } from './Backend/tipo/tipo.entity';

@Module({
  imports: [ProductoModule,
    TypeOrmModule.forRoot({
      name: 'default', // Nombre cadena conex por defecto de TYPEORM
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'proyecto',
      entities: [
        ProductoEntity,
        BodegaEntity,
        ClienteEntity,
        PedidoEntity,
        ProveedorEntity,
        RolEntity,
        TipoEntity,
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

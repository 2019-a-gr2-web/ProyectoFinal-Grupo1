import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntity } from './pedido.entity';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';
import { DetalleService } from '../productoToPedido/producto_pedido.service';
import { ProductoService } from '../producto/producto.service';
import { ProductoEntity } from '../producto/producto.entity';
import { DetalleEntity } from '../productoToPedido/producto_pedido.entity';
@Module({
  imports: [TypeOrmModule.forFeature(
    [
      PedidoEntity,
      ProductoEntity,
      DetalleEntity,
    ],
    'default',
  ),
  ],
  controllers: [PedidoController],
  providers: [ProductoService,PedidoService, DetalleService],
  exports: [ProductoService,PedidoService, DetalleService ]
})
export class PedidoModule { }

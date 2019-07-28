import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleEntity } from './producto_pedido.entity';
import { DetalleController } from './producto_pedido.controller';
import { DetalleService } from './producto_pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature(
    [
      DetalleEntity
    ],
    'default'
  ),
  ],
  controllers: [DetalleController],
  providers: [DetalleService],
  exports: [DetalleService]
})
export class DetalleModule { }

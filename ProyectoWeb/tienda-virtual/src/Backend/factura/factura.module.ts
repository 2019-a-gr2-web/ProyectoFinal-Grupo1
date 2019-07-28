import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';

@Module({
  providers: [FacturaService]
})
export class FacturaModule {}

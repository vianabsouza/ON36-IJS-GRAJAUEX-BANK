import { Module } from '@nestjs/common';
import { ContaController } from './conta.controller';
import { ContaService } from './conta.service';
import { ContaFactory } from './factories/conta.factory';

@Module({
  controllers: [ContaController],
  providers: [ContaService, ContaFactory]
})
export class ContaModule {}

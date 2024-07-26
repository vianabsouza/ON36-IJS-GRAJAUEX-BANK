import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';

@Module({
  providers: [GerenteService],
  controllers: [GerenteController]
})
export class GerenteModule {}

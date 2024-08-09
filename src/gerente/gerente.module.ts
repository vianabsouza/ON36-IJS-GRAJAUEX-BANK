import { Module } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { GerenteController } from './gerente.controller';
import { ClienteService } from 'src/cliente/cliente.service';

@Module({
  providers: [GerenteService],
  controllers: [GerenteController]
})
export class GerenteModule {}

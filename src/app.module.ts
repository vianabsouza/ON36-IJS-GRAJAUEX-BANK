import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './cliente/cliente.service';
import { GerenteModule } from './gerente/gerente.module';
import { ContaModule } from './conta/conta.module';
import { ClienteModule } from './cliente/cliente.module';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteModule } from './cliente/cliente.module';
import { ContaService } from './conta/conta.service';
import { ContaController } from './conta/conta.controller';
import { ContaModule } from './conta/conta.module';
import { GerenteService } from './gerente/gerente.service';
import { GerenteController } from './gerente/gerente.controller';
import { GerenteModule } from './gerente/gerente.module';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [ClienteModule, ContaModule, GerenteModule],
  controllers: [AppController, ClienteController, ContaController, GerenteController],
  providers: [AppService, ClienteService, ContaService, GerenteService],
})
export class AppModule {}

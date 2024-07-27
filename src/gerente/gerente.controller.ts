import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Cliente } from 'src/cliente/cliente.model';
import { ClienteService } from 'src/cliente/cliente.service';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly clienteService: ClienteService){}

  @Post()
  createCustomer(@Body('nomeCompleto') nomeCompleto: string, @Body('endereco') endereco: string, @Body('telefone') telefone: string): Cliente {
    return this.clienteService.createCustomer(nomeCompleto, endereco, telefone);
  }

  @Delete(':id')
  removeCustomer(@Param('id', ParseIntPipe) id: number):void {
    return this.clienteService.removeCustomer(id);
  }
}

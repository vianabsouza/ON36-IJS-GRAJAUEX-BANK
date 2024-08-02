import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService){}

  @Post()
  createCustomer(@Body('nomeCompleto') nomeCompleto: string, @Body('endereco') endereco: string, @Body('telefone') telefone: string): Cliente {
    return this.clienteService.createCustomer(nomeCompleto, endereco, telefone);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Cliente {
    return this.clienteService.findById(id);
  }

  @Put(':id')
  updateCustomer(@Param('id', ParseIntPipe) id: number, @Body('nomeCompleto') nomeCompleto: string, @Body('endereco') endereco: string, @Body('telefone') telefone: string): Cliente {
    return this.clienteService.updateCustomer(id, nomeCompleto, endereco, telefone)
  }

  @Delete(':id')
  removeCustomer(@Param('id', ParseIntPipe) id: number):void {
    return this.clienteService.removeCustomer(id);
  }
}



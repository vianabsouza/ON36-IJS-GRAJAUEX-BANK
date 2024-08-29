import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.model';
import { TipoConta } from '../enums/tipo.conta';
import { Cliente } from '../cliente/cliente.model';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {
  }

  @Post()
  createAccount(@Body('cliente') cliente: Cliente, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.createAccount(cliente, saldo, tipo);
  }

  @Get(':id')
  findById(@Param('id') id: string): Conta {
    return this.contaService.findById(id);
  }

  @Put(':id')
  updateAccount(@Body('id') id: string, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.updateAccount(id, saldo, tipo);
  }

  @Delete(':id')
  removeAccount(@Param('id') id: string): void {
    return this.contaService.removeAccount(id);
  }
}

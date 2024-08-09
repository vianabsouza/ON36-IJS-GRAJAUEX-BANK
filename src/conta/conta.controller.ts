import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta } from './conta.model';
import { TipoConta } from '../enums/tipo.conta';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {
  }

  @Post()
  createAccount(@Body('nome') nome: string, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.createAccount(nome, saldo, tipo);
  }

  @Get(':id')
  findById(@Param('id') id: string): Conta {
    return this.contaService.findById(id);
  }

  @Put(':id')
  updateAccount(@Body('id') id: string, @Body('nome') nome: string, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.updateAccount(nome, id, saldo, tipo);
  }

  @Delete(':id')
  removeAccount(@Param('id') id: string): void {
    return this.contaService.removeAccount(id);
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContaService } from './conta.service';
import { Conta, TipoConta } from './conta.model';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {
  }

  @Post()
  createAccount(@Body('clienteId') clienteId: number, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.createAccount(clienteId, saldo, tipo);
  }

  @Get(':id')
  findById(@Param('id') id: number): Conta {
    return this.contaService.findById(id);
  }

  @Put(':id')
  updateAccount(@Body('id') id: number, @Body('saldo') saldo: number, @Body('tipo') tipo: TipoConta): Conta {
    return this.contaService.updateAccount(id, saldo, tipo);
  }

  @Delete(':id')
  removeAccount(@Param('id') id: number): void {
    return this.contaService.removeAccount(id);
  }
}

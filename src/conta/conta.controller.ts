import { Body, Controller, Post } from '@nestjs/common';
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
}

import { Cliente } from "src/cliente/cliente.model";
import { TipoConta } from "../enums/tipo.conta";
import { Conta } from "./conta.model";
import { NotFoundException } from "@nestjs/common";

export class ContaCorrente implements Conta {
  tipo = TipoConta.CORRENTE;
  limiteChequeEspecial: number;
  saldo: number;

  constructor(public id: string, public cliente: Cliente, public saldoInicial: number, limiteChequeEspecial: number) {
    this.saldo = saldoInicial;
  }

  getSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): number {
    if (valor === 0) {
      throw new NotFoundException('O valor do deposito deve ser positivo')
    }
    this.saldo += valor;
    return this.saldo;
  }

  sacar(valor: number): number {
    if(valor >= this.saldo + this.limiteChequeEspecial) {
      throw new NotFoundException('Saldo insuficiente')
    }
    return this.saldo -= valor;
  }
}
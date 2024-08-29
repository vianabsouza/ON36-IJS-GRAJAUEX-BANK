import { Cliente } from "src/cliente/cliente.model";
import { TipoConta } from "../enums/tipo.conta";
import { Conta } from "./conta.model";
import { NotFoundException } from "@nestjs/common";

export class ContaPoupanca implements Conta {
  tipo = TipoConta.POUPANCA;

  constructor(public id: string, public cliente: Cliente, public saldo: number, public taxa: number) {}

  getSaldo(): number {
    return this.saldo;
  }

  depositar(valor: number): number {
    if(valor < 0) {
      throw new NotFoundException('O valor do depósito deve ser positivo');
    }
    this.saldo += valor;
    return this.saldo;
  }

  sacar(valor: number): number {
    if (valor > this.saldo) {
      throw new NotFoundException('Saldo insuficiente');
    }
    this.saldo -= valor;
    return this.saldo;
  }

  aplicarJuros(): number {
    const juros = this.saldo * this.taxa;
    this.saldo += juros;
    return this.saldo;
  }
}
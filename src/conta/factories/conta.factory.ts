import { Injectable } from "@nestjs/common";
import { ContaCorrente } from "src/conta/conta.corrente";
import { Conta } from "src/conta/conta.model";
import { ContaPoupanca } from "src/conta/conta.poupanca";
import { TipoConta } from "src/enums/tipo.conta";

@Injectable()
export class ContaFactory {
  createAccount(tipo: TipoConta, id: number, nome: string, saldo: number): Conta {
    switch(tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(id, nome, saldo);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(id, nome, saldo);
      default:
        throw new Error('Tipo de conta inválida');
    }
  }
}
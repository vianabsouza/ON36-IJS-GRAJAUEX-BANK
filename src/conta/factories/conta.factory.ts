import { Injectable } from "@nestjs/common";
import { ContaCorrente } from "../conta.corrente";
import { Conta } from "../conta.model";
import { ContaPoupanca } from "../conta.poupanca";
import { TipoConta } from "../../enums/tipo.conta";
import { Cliente } from "src/cliente/cliente.model";

@Injectable()
export class ContaFactory {
  createAccount(tipo: TipoConta, id: string, cliente: Cliente, saldo: number, limiteChequeEspecial?: number, taxa?: number, ): ContaCorrente | ContaPoupanca {
    switch(tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(id, cliente, saldo, limiteChequeEspecial);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(id, cliente, saldo, taxa);
      default:
        throw new Error('Tipo de conta inválida');
    }
  }
}
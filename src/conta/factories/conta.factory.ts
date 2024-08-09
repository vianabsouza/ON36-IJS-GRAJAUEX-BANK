import { Injectable } from "@nestjs/common";
import { ContaCorrente } from "../conta.corrente";
import { Conta } from "../conta.model";
import { ContaPoupanca } from "../conta.poupanca";
import { TipoConta } from "../../enums/tipo.conta";

@Injectable()
export class ContaFactory {
  createAccount(tipo: TipoConta, id: string, nome: string, saldo: number, limiteChequeEspecial?: number, taxa?: number, ): Conta {
    switch(tipo) {
      case TipoConta.CORRENTE:
        return new ContaCorrente(id, nome, saldo, limiteChequeEspecial);
      case TipoConta.POUPANCA:
        return new ContaPoupanca(id, nome, saldo, taxa);
      default:
        throw new Error('Tipo de conta inválida');
    }
  }
}
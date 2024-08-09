import { TipoConta } from "../enums/tipo.conta";
import { Conta } from "./conta.model";

export class ContaPoupanca implements Conta {
  tipo = TipoConta.POUPANCA;

  constructor(public id: string, public nome: string, public saldo: number, public taxa: number) {}
}
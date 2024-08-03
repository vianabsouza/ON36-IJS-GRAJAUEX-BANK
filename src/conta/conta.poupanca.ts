import { TipoConta } from "src/enums/tipo.conta";
import { Conta } from "./conta.model";

export class ContaPoupanca implements Conta {
  tipo = TipoConta.POUPANCA;

  constructor(public id: number, public nome: string, public saldo: number) {}
}
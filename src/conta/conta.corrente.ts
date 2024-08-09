import { TipoConta } from "src/enums/tipo.conta";
import { Conta } from "./conta.model";

export class ContaCorrente implements Conta {
  tipo = TipoConta.CORRENTE;

  constructor(public id: number, public nome: string, public saldo: number) {}
}
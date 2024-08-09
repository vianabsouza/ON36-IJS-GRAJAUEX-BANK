import { TipoConta } from "../enums/tipo.conta";
import { Conta } from "./conta.model";

export class ContaCorrente implements Conta {
  tipo = TipoConta.CORRENTE;

  constructor(public id: string, public nome: string, public saldo: number) {}
}
import { Cliente } from "src/cliente/cliente.model";
import { TipoConta } from "../enums/tipo.conta";
import { Conta } from "./conta.model";

export class ContaCorrente implements Conta {
  tipo = TipoConta.CORRENTE;

  constructor(public id: string, public cliente: Cliente, public saldo: number, limiteChequeEspecial: number) {}
}
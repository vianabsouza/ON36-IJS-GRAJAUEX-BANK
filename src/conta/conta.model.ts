import { Cliente } from "src/cliente/cliente.model";

export enum TipoConta {
  CORRENTE = 'corrente',
  POUPANCA = 'poupanca'
}

export class Conta {
  constructor(
    public id: number,
    public cliente: Cliente[],
    public numeroCartao: string,
    public saldo: number,
    public tipo: TipoConta
  ) {}
}
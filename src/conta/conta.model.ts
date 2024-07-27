export enum TipoConta {
  CORRENTE = 'corrente',
  POUPANCA = 'poupanca'
}

export class Conta {
  constructor(
    public id: number,
    public clienteId: number,
    public saldo: number,
    public tipo: TipoConta
  ) {}
}
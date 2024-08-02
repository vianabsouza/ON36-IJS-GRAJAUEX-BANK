import { TipoConta } from "src/enums/tipo.conta";
export class Conta {
  constructor(
    public id: number,
    public clienteId: number,
    public saldo: number,
    public tipo: TipoConta
  ) {}
}
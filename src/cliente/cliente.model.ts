import { Conta } from "src/conta/conta.model";
import { Gerente } from "src/gerente/conta.model";

export class Cliente {
  constructor(
    public id: number,
    public nomeCompleto: string,
    public endereco: string,
    public telefone: string,
    public conta: Conta[],
    public gerente: Gerente[]
  ) {}
}
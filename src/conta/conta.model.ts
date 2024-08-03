import { TipoConta } from "src/enums/tipo.conta";
export interface Conta {
    id: number,
    nome: string,
    saldo: number,
    tipo: TipoConta
}
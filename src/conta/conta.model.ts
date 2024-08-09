import { TipoConta } from "src/enums/tipo.conta";
export interface Conta {
    id: string,
    nome: string,
    saldo: number,
    tipo: TipoConta
}
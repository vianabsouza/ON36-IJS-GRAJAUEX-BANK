import { Cliente } from "src/cliente/cliente.model";
import { TipoConta } from "src/enums/tipo.conta";
export interface Conta {
    id: string,
    cliente: Cliente,
    saldo: number,
    tipo: TipoConta
}
import { Cliente } from "src/cliente/cliente.model";

export class Gerente {
  constructor(
    public id: number,
    public nomeCompleto: string,
    public cidade: string,
    public clientes: Cliente[]
  ) {}
}
import Cliente from "./Cliente";
import Conta from "./Conta";

class ContaCorrente extends Conta{
  private limiteChequeEspecial: number;

  constructor(id: number, cliente: Cliente, numeroCartao: string, saldo: number, limiteChequeEspecial: number){
    super(id, cliente, numeroCartao, saldo);
    this.limiteChequeEspecial = 2000;
  }
}
import Cliente from "./cliente";
import Conta from "./conta";

class ContaCorrente extends Conta{
  private limiteChequeEspecial: number;

  constructor(id: number, cliente: Cliente, numeroCartao: string, saldo: number, limiteChequeEspecial: number){
    super(id, cliente, numeroCartao, saldo);
    this.limiteChequeEspecial = 2000;
  }

  public getLimiteChequeEspecial(): number {
    return this.limiteChequeEspecial;
  }

  public setDepositarChequeEspecial(valor: number): void {
    this.setSaldo(this.getSaldo() - valor)
  }
}
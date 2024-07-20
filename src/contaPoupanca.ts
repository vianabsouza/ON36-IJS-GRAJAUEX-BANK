import Cliente from "./Cliente";
import Conta from "./Conta";

class ContaPoupanca extends Conta{
  private taxaJuros: number;

  constructor(id: number, cliente: Cliente, numeroCartao: string, saldo: number, taxaJuros: number){
    super(id, cliente, numeroCartao, saldo)
    this.taxaJuros = 0.02;
  }

  public adicionarTaxaJuros(): void{
    this.setSaldo(this.getSaldo() + this.getSaldo() * this.taxaJuros)
  }
}
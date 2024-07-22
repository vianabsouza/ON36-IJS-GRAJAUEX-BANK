import Cliente from "./cliente";
import Conta from "./conta";

class ContaPoupanca extends Conta{
  private taxaJuros: number;

  constructor(id: number, cliente: Cliente, numeroCartao: string, saldo: number, taxaJuros: number){
    super(id, cliente, numeroCartao, saldo)
    this.taxaJuros = 0.02;
  }

  public getTaxaJuros(): number{
    return this.taxaJuros;
  }

  public setTaxaJuros(): void{
    this.setSaldo(this.getSaldo() + this.getSaldo() * this.taxaJuros)
  }

  public consultarTaxaJuroa(): string{
    return `A taxa de juros da sua conta poupança é de ${this.taxaJuros * 100}%`;
  }
}
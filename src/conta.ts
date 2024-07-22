import Cliente from "./cliente";

export default class Conta{
  private id: number;
  private cliente: Cliente;
  private numeroCartao: string;
  private saldo: number;

  constructor(id: number, cliente: Cliente, numeroCartao: string, saldo: number) {
    this.id = id;
    this.cliente = cliente;
    this.numeroCartao = numeroCartao;
    this.saldo = saldo;
  }

  public getId(): number{
    return this.id;
  }

  public getCliente(): Cliente{
    return this.cliente;
  }

  public getNumeroCartao(): string{
    return this.numeroCartao;
  }

  public getSaldo(): number{
    return this.saldo;
  }

  public setSaldo(saldo: number): void{
    this.saldo = saldo;
  }

  public depositar(valor: number): void{
    if(valor > 0) {
      this.saldo += valor;
    } else {
      throw new Error("Você precisa de uma valor válido para o depósito.")
    }
  }

  public sacar(valor: number): void{
    if(valor > 0 && valor <= this.saldo){
      this.saldo -=valor;
    } else {
      throw new Error("Valor de saque inválido ou saldo insuficiente.")
    }
  }

  public transferir(valor: number, contaDestino: Conta): void{
    if(valor > 0 && valor <= this.saldo){
      contaDestino.depositar(valor);
    } else {
      throw new Error("Valor de transferência inválido ou saldo insuficiente.")
    }
  }
}
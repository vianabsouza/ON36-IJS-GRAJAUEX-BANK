import Conta from "./conta";

export default class Cliente {
  private id: number;
  private nomeCompleto: string;
  private endereco: string;
  private telefone: string;
  private conta: Conta[];

  constructor(id: number, nomeCompleto: string, endereco: string, telefone: string, conta: Conta[]){
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.endereco = endereco;
    this.telefone = telefone;
    this.conta = conta;
  }

  public getId(): number{
    return this.id;
  }

  public getNomeCompleto(): string{
    return this.nomeCompleto;
  }

  public setNomeCompleto(nomeCompleto: string): void{
    this.nomeCompleto = this.nomeCompleto;
  }

  public getEndereco(): string{
    return this.endereco;
  }

  public setEndereco(endereco: string): void{
    this.endereco = this.endereco;
  }

  public getTelefone(): string{
    return this.telefone;
  }

  public setTelefone(endereco: string): void{
    this.telefone = this.telefone;
  }

  public getConta(): Conta[]{
    return this.conta;
  }

  public setConta(conta: Conta[]): void{
    this.conta = conta;
  }

  public adicionarConta(conta: Conta): void {
    this.conta.push(conta);
  }
}
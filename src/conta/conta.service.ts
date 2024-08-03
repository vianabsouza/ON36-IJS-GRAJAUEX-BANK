import { Injectable, NotFoundException } from '@nestjs/common';
import { Conta } from './conta.model';
import { TipoConta } from 'src/enums/tipo.conta';
import  { ContaFactory } from './factories/conta.factory'
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ContaService {
  private readonly filePath = path.resolve('src/conta/conta.json');

  constructor(private readonly ContaFactory: ContaFactory) {}

  private readAccounts(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[]
  }

  private writeAccounts(accounts: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(nome: string, saldo: number, tipo: TipoConta): Conta {
    const accounts = this.readAccounts();
    const newAccount = this.ContaFactory.createAccount(
      tipo,
      accounts.length > 0 ? accounts[accounts.length - 1].id  + 1 : 1,
      nome,
      saldo,
    );

    accounts.push(newAccount);
    this.writeAccounts(accounts);
    return newAccount;
  }

  findById(id: number): Conta {
    const accounts = this.readAccounts();
    const account = accounts.find(account => account.id === Number(id));

    if(!account) {
      throw new NotFoundException(`Conta com o ${id} não encontrado`)
    }

    return account;
  }

  updateAccount(nome: string, id: number, saldo: number, tipo: TipoConta): Conta {
    const accounts = this.readAccounts();
    const account = accounts.find(account => account.id === Number(id));

    if(!account) {
      throw new NotFoundException(`Conta com o ${id} não encontrado`)
    }

    account.nome = nome;
    account.saldo = saldo;
    account.tipo = tipo;

    this.writeAccounts(accounts);

    return account;
  }

  removeAccount(id: number): void {
    const accounts = this.readAccounts();
    const account = accounts.findIndex(account => account.id === Number(id));

    accounts.splice(account, 1);
    this.writeAccounts(accounts);

  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Conta, TipoConta } from './conta.model';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ContaService {
  private readonly filePath = path.resolve('src/conta/conta.json');

  private readAccounts(): Conta[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Conta[]
  }

  private writeAccounts(accounts: Conta[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(accounts, null, 2), 'utf8');
  }

  createAccount(clienteId: number, saldo: number, tipo: TipoConta): Conta {
    const accounts = this.readAccounts();
    const newAccount = {
      id: accounts.length > 0 ? accounts[accounts.length - 1].id  + 1 : 1,
      clienteId,
      saldo,
      tipo,
    }
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

  updateAccount(id: number, saldo: number, tipo: TipoConta): Conta {
    const accounts = this.readAccounts();
    const account = accounts.find(account => account.id === Number(id));

    if(!account) {
      throw new NotFoundException(`Conta com o ${id} não encontrado`)
    }

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

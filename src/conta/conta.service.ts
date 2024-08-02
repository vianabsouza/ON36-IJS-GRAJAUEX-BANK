import { Injectable } from '@nestjs/common';
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
}

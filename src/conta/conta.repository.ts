import { Injectable } from '@nestjs/common';
import { uuid } from 'uuidv4';
import { Conta } from './conta.model';

@Injectable()
export class ContaRepository {
  accounts: Conta[] = [];

  createAccount(account: Conta): Conta {
    account.id = uuid();
    this.accounts.push(account);
    return account;
  }

  getAccountById(accountId: string): Conta | null {
    const account = this.accounts.find((account) => account.id === accountId);
    return account;
  }

  removeAccount(accountId: string): void {
    this.accounts = this.accounts.filter((account) => account.id !== accountId);
  }
}
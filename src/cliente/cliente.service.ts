import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { Cliente } from './cliente.model';
import { uuid } from 'uuidv4';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ClienteService {
  private readonly filePath = path.resolve('src/cliente/cliente.json');

  private readCustomer(): Cliente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Cliente[]
  }

  private writeCustomer(customers: Cliente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(customers, null, 2), 'utf8');
  }

  createCustomer(nomeCompleto: string, endereco: string, telefone: string): Cliente {
    const customers = this.readCustomer();
    const newCustomer = {
      id: uuid(),
      nomeCompleto,
      endereco,
      telefone,
    }
    customers.push(newCustomer);
    this.writeCustomer(customers);
    return newCustomer;
  }

  findById(id: string): Cliente {
    const customers = this.readCustomer();
    const customer = customers.find(customer => customer.id === id);

    if(!customer) {
      throw new NotFoundException(`Cliente com o id ${id} não encontrado`);
    }

    return customer;
  }

  updateCustomer(id: string, nomeCompleto: string, endereco: string, telefone: string): Cliente {
    const customers = this.readCustomer();
    const customer = customers.find(customer => customer.id === id);

    if(!customer) {
      throw new NotFoundException(`Cliente com o id ${id} não encontrado`);
    }

    customer.nomeCompleto = nomeCompleto;
    customer.endereco = endereco;
    customer.telefone = telefone;

    this.writeCustomer(customers);

    return customer;
  }

  removeCustomer(id: string): void {
    const customers = this.readCustomer();
    const customerIndex = customers.findIndex(customer => customer.id === id);

    customers.splice(customerIndex, 1);
    this.writeCustomer(customers);
  }
}

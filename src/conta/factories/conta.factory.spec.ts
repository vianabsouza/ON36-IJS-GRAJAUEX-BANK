import { ContaFactory } from "./conta.factory";
import { TipoConta } from "../../enums/tipo.conta";
import { Cliente } from "../../cliente/cliente.model";

describe('Factory Account', () => {
  test('should create a checking account', () => {
    const client = new Cliente('1', 'Barbara Liskov', 'Science Street', '99999999' );
    const typeAccount = TipoConta.CORRENTE;

    const accountFactory = new ContaFactory();
    const returned = accountFactory.createAccount(typeAccount, '1', client, 0, 2000);

    expect(returned.saldo).toBe(0);
  });

  test('should create a savings account', () => {

  });

  test('should create an exception when an invalid type', () => {

  })
})
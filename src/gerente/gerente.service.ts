import { Injectable, NotFoundException } from '@nestjs/common';
import { Gerente } from './gerente.model';
import { uuid } from 'uuidv4'
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class GerenteService {
  private readonly filePath = path.resolve('src/gerente/gerente.json');

  private readManager(): Gerente[] {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data) as Gerente[]
  }

  private writeManager(managers: Gerente[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(managers, null, 2), 'utf8');
  }

  createManager(contaId: string): Gerente {
    const managers = this.readManager();
    const newManager = {
      id: uuid(),
      contaId
    }
    managers.push(newManager);
    this.writeManager(managers);
    return newManager;
  }

  findById(id: string): Gerente {
    const managers = this.readManager();
    const manager = managers.find(manager => manager.id === id);

    if(!manager) {
      throw new NotFoundException(`Gerente com o id ${id} não encontrado`);
    }

    return manager;
  }

  updateManager(id: string, contaId: string): Gerente {
    const managers = this.readManager();
    const manager = managers.find(manager => manager.id === id);

    if(!manager) {
      throw new NotFoundException(`Gerente com o id ${id} não encontrado`);
    }

    manager.id = id;
    manager.contaId = contaId;

    this.writeManager(managers);

    return manager;
  }

  removeManager(id: string): void {
    const managers = this.readManager();
    const managerIndex = managers.findIndex(manager => manager.id === id);

    managers.splice(managerIndex, 1);
    this.writeManager(managers);
  }
}

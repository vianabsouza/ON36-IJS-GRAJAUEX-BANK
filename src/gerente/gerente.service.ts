import { Injectable, NotFoundException } from '@nestjs/common';
import { Gerente } from './gerente.model';
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

  createManager(contaId: number): Gerente {
    const managers = this.readManager();
    const newManager = {
      id: managers.length > 0 ? managers[managers.length - 1].id + 1 : 1,
      contaId
    }
    managers.push(newManager);
    this.writeManager(managers);
    return newManager;
  }

  findById(id: number): Gerente {
    const managers = this.readManager();
    const manager = managers.find(manager => manager.id === Number(id));

    if(!manager) {
      throw new NotFoundException(`Gerente com o id ${id} não encontrado`);
    }

    return manager;
  }

  updateManager(id: number): Gerente {
    const managers = this.readManager();
    const manager = managers.find(manager => manager.id === Number(id));

    if(!manager) {
      throw new NotFoundException(`Gerente com o id ${id} não encontrado`);
    }

    manager.id = id;

    this.writeManager(managers);

    return manager;
  }

  removeManager(id: number): void {
    const managers = this.readManager();
    const managerIndex = managers.findIndex(manager => manager.id === Number(id));

    managers.splice(managerIndex, 1);
    this.writeManager(managers);
  }
}

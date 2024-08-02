import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Gerente } from './gerente.model';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService){}

  @Post()
  createManager(@Body('id') id: number): Gerente {
    return this.gerenteService.createManager(id);
  }

  @Delete(':id')
  removeCustomer(@Param('id', ParseIntPipe) id: number):void {
    return this.gerenteService.removeManager(id);
  }
}

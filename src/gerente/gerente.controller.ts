import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Gerente } from './gerente.model';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService){}

  @Post()
  createManager(@Body('id') id: number): Gerente {
    return this.gerenteService.createManager(id);
  }

  @Get(':id')
  findById(@Param('id') id: number): Gerente {
    return this.gerenteService.findById(id);
  }

  @Put(':id')
  updateManager(@Body('id') id: number, @Body('contaId') contaId: number): Gerente {
    return this.gerenteService.updateManager(id, contaId)
  }

  @Delete(':id')
  removeCustomer(@Param('id', ParseIntPipe) id: number):void {
    return this.gerenteService.removeManager(id);
  }
}

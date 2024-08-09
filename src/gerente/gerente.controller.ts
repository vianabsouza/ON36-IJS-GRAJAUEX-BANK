import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GerenteService } from './gerente.service';
import { Gerente } from './gerente.model';

@Controller('gerente')
export class GerenteController {
  constructor(private readonly gerenteService: GerenteService){}

  @Post()
  createManager(@Body('id') id: string): Gerente {
    return this.gerenteService.createManager(id);
  }

  @Get(':id')
  findById(@Param('id') id: string): Gerente {
    return this.gerenteService.findById(id);
  }

  @Put(':id')
  updateManager(@Body('id') id: string, @Body('contaId') contaId: string): Gerente {
    return this.gerenteService.updateManager(id, contaId)
  }

  @Delete(':id')
  removeCustomer(@Param('id', ParseIntPipe) id: string):void {
    return this.gerenteService.removeManager(id);
  }
}

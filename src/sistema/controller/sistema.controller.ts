import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SistemaService } from '../service/sistema.service';
import { CriarSistemaDto } from '../dto/criar-sistema.dto';

@Controller('sistema')
export class SistemaController {
  constructor(private readonly sistemaService: SistemaService) {}

  @Post()
  cadastrarSistema(@Body() body: CriarSistemaDto) {
    return this.sistemaService.criarSistema(body.nome, body.cooperativa);
  }

  @Get('/:id')
  buscarSistema(@Param('id') id: string) {
    return this.sistemaService.buscarSistema(id);
  }

  @Get()
  buscarSistems() {
    return this.sistemaService.buscarSistemas();
  }

  @Delete('/:id')
  deletarSistema(@Param('id') id: string) {
    return this.sistemaService.excluirSistema(id);
  }
}

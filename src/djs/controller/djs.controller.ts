import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DjsService } from '../service/djs.service';
import { v4 as uuidv4 } from 'uuid';
import { CriarDjDto } from '../dto/criar-dj.dto';
import { AtualizarDjDto } from '../dto/atualizar-dj.dto';

@Controller('djs')
export class DjsController {
  constructor(private readonly djsService: DjsService) {}

  @Get('/:id')
  buscarDJ(@Param('id') id) {
    return this.djsService.buscar(id);
  }

  @Post()
  criarDJ(@Body() body: CriarDjDto) {
    const dj = {
      id: uuidv4(),
      musicas: body.musicas,
      nome: body.nome,
    };
    return this.djsService.criar(dj);
  }

  @Get()
  buscarDJs(@Query('pagina') pagina, @Query('limite') limite) {
    const djs = this.djsService.listar();
    return { djs };
  }

  @Put('/:id')
  atualizarDJ(@Body() body: AtualizarDjDto, @Param('id') id) {
    const djAtualizado = this.djsService.atualizar(id, body);
    return { dj: djAtualizado };
  }

  @Delete('/id')
  deletarDj(@Param('id') id) {
    this.djsService.deletar(id);
  }
}

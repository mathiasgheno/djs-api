import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SistemaEntity } from '../../entity/sistema.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SistemaService {
  constructor(
    @InjectRepository(SistemaEntity)
    private readonly repositorySistema: Repository<SistemaEntity>,
  ) {}

  criarSistema(nome, cooperativa) {
    const sistema = {
      nome,
      cooperativa,
    };
    return this.repositorySistema.save(sistema);
  }

  async excluirSistema(id) {
    const sistema = await this.repositorySistema.findOne({ id });
    if (!sistema) {
      throw new NotFoundException();
    }
    return this.repositorySistema.delete({ id });
  }

  async buscarSistema(id) {
    const sistema = await this.repositorySistema.findOne({ id });
    if (!sistema) {
      throw new NotFoundException();
    }
    return sistema;
  }

  buscarSistemas() {
    return this.repositorySistema.find();
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { DjsEntity } from '../entities/djs.entity';

@Injectable()
export class DjsService {
  private djs: DjsEntity[] = [];

  buscar(id: string) {
    const dj = this.djs.find((dj) => dj.id === id);
    if (!dj) {
      const erro = {
        message: `Não foi encontrado DJ com id: ${id}`,
      };
      throw new NotFoundException(erro);
    }
    return dj;
  }

  criar(dj: DjsEntity) {
    this.djs.push(dj);
    return this.djs.find(({ id }) => id === dj.id);
  }

  atualizar(id: string, dj) {
    // como tipar esse dj?
    const index = this.djs.findIndex((dj) => dj.id === id);
    if (index >= 0) {
      this.djs[index] = {
        ...this.djs[index],
        ...dj,
      };
      return this.djs.find((dj) => dj.id === id);
    } else {
      const erro = {
        message: `Não foi encontrado DJ com id: ${id}`,
      };
      throw new NotFoundException(erro);
    }
  }

  deletar(id) {
    const index = this.djs.findIndex((dj) => dj.id === id);
    if (index >= 0) {
      this.djs = this.djs.filter((dj) => dj.id !== id);
    } else {
      const erro = {
        message: `Não foi encontrado DJ com id: ${id}`,
      };
      throw new NotFoundException(erro);
    }
  }

  listar() {
    return this.djs;
  }
}

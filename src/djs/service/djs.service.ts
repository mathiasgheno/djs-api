import { Injectable, NotFoundException } from '@nestjs/common';
import { DjsEntity } from '../entities/djs.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriarDjDto } from '../dto/criar-dj.dto';
import { AtualizarDjDto } from '../dto/atualizar-dj.dto';
import { createEvalAwarePartialHost } from 'ts-node/dist/repl';

@Injectable()
export class DjsService {
  constructor(
    @InjectRepository(DjsEntity)
    private readonly djsRepository: Repository<DjsEntity>,
  ) {}

  async buscar(id: string) {
    // const dj = this.djs.find((dj) => dj.id === id);
    // if (!dj) {
    //   const erro = {
    //     message: `Não foi encontrado DJ com id: ${id}`,
    //   };
    //   throw new NotFoundException(erro);
    // }
    // return dj;
    const dj = await this.djsRepository.findOne({ id: +id });
    if (!dj) {
      const erro = {
        message: `Não foi encontrado DJ com id: ${id}`,
      };
      throw new NotFoundException(erro);
    }
    return dj;
  }

  async criar(dj: CriarDjDto) {
    // this.djs.push(dj);
    // return this.djs.find(({ id }) => id === dj.id);
    try {
      const resultado = await this.djsRepository.create(dj);
      return this.djsRepository.save(resultado);
    } catch (e) {
      console.log(e);
    }
  }

  async atualizar(id: string, dj: AtualizarDjDto) {
    // // como tipar esse dj?
    // const index = this.djs.findIndex((dj) => dj.id === id);
    // if (index >= 0) {
    //   this.djs[index] = {
    //     ...this.djs[index],
    //     ...dj,
    //   };
    //   return this.djs.find((dj) => dj.id === id);
    // } else {
    //   const erro = {
    //     message: `Não foi encontrado DJ com id: ${id}`,
    //   };
    //   throw new NotFoundException(erro);
    // }
    const resultado = await this.djsRepository.preload({
      id: +id,
      ...dj,
    });
    if (!resultado) {
      const erro = {
        message: `Não foi encontrado DJ com id: ${id}`,
      };
      throw new NotFoundException(erro);
    }
    return this.djsRepository.save(resultado);
  }

  async deletar(id) {
    // const index = this.djs.findIndex((dj) => dj.id === id);
    // if (index >= 0) {
    //   this.djs = this.djs.filter((dj) => dj.id !== id);
    // } else {
    //   const erro = {
    //     message: `Não foi encontrado DJ com id: ${id}`,
    //   };
    //   throw new NotFoundException(erro);
    // }
    try {
      const resultado = await this.djsRepository.findOne({
        id: +id,
      });
      return this.djsRepository.delete({
        id: +id,
      });
    } catch (e) {
      console.log(e);
    }
  }

  listar() {
    return this.djsRepository.find();
  }
}

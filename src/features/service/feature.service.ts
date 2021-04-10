import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeaturesEntity } from '../entity/features.entity';

@Injectable()
export class FeatureService {
  constructor(
    @InjectRepository(FeaturesEntity)
    private featureRepository: Repository<FeaturesEntity>,
  ) {}

  criarFeature(nome, sistema, habilitado) {
    return this.featureRepository.save({
      nome,
      sistema,
      habilitado,
    });
  }

  deletarFeature(id) {
    const feature = this.featureRepository.findOne({ id });
    if (!feature) {
      throw new NotFoundException();
    }
    return this.featureRepository.delete({ id });
    // return feature;
  }

  listar() {
    return this.featureRepository.find();
    // return this.featureRepository
    //   .createQueryBuilder('feature')
    //   .innerJoinAndSelect('feature.sistema', 'sistema')
    //   .getMany();
  }

  buscar(id) {
    return this.featureRepository.findOne({ id });
  }
}

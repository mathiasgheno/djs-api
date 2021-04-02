import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FeaturesEntity } from '../../features/entity/features.entity';

@Entity('sistema')
export class SistemaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  cooperativa: string;

  @OneToMany(() => FeaturesEntity, (feature) => feature.sistema, {
    eager: true,
  })
  features: FeaturesEntity[];
}

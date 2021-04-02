import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { SistemaEntity } from '../../sistema/entity/sistema.entity';

@Entity('feature')
export class FeaturesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Unique(['nome'])
  nome: string;

  // @Column({ nullable: true })
  // sistemaId: string;
  // // https://typeorm.io/#/relations-faq/how-to-use-relation-id-without-joining-relation

  @ManyToOne(() => SistemaEntity, (sistema) => sistema.features)
  @JoinColumn({ name: 'sistemaId' })
  sistema: SistemaEntity;

  @Column()
  habilitado: boolean;
}

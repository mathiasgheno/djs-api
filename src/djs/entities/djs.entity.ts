import { MusicaEntity } from './musica.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('djs')
export class DjsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('json', { nullable: true })
  musicas?: MusicaEntity[];
}

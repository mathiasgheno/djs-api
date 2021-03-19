import { MusicaEntity } from './musica.entity';

export class DjsEntity {
  id: string;
  nome: string;
  musicas?: MusicaEntity[];
}

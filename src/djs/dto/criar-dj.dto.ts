import { IsString, IsInstance, IsOptional } from 'class-validator';

export class MusicaDTO {
  @IsString() readonly nome: string;
  @IsString() readonly genero: string;
}

export class CriarDjDto {
  @IsString()
  readonly nome: string;

  @IsInstance(MusicaDTO, { each: true })
  @IsOptional({ each: true })
  readonly musicas?: MusicaDTO[];
}

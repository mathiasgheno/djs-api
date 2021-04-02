import {
  IsString,
  IsInstance,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class MusicaDTO {
  @IsString() readonly nome: string;
  @IsString() readonly genero: string;
}

export class CriarDjDto {
  @IsString()
  readonly nome: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MusicaDTO)
  @IsInstance(MusicaDTO, { each: true })
  @IsOptional()
  readonly musicas?: MusicaDTO[];
}

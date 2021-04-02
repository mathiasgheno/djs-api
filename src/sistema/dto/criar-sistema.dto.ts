import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CriarSistemaDto {
  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['566', '94'])
  readonly cooperativa: string;
}

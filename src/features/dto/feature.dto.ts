import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class FeatureDto {
  @IsString() @IsNotEmpty() readonly nome;
  @IsString() @IsNotEmpty() readonly sistema;
  @IsBoolean() @IsNotEmpty() readonly habilitado;
}

import { PartialType } from '@nestjs/mapped-types';
import { CriarDjDto } from './criar-dj.dto';

export class AtualizarDjDto extends PartialType(CriarDjDto) {}

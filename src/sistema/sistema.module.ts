import { Module } from '@nestjs/common';
import { SistemaController } from './controller/sistema/sistema.controller';
import { SistemaService } from './service/sistema/sistema.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaEntity } from './entity/sistema.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SistemaEntity])],
  controllers: [SistemaController],
  providers: [SistemaService],
})
export class SistemaModule {}

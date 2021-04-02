import { Module } from '@nestjs/common';
import { DjsController } from './controller/djs.controller';
import { DjsService } from './service/djs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DjsEntity } from './entities/djs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DjsEntity])],
  controllers: [DjsController],
  providers: [DjsService],
})
export class DjsModule {}

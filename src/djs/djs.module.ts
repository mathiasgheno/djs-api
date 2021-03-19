import { Module } from '@nestjs/common';
import { DjsController } from './controller/djs.controller';
import { DjsService } from './service/djs.service';

@Module({
  controllers: [DjsController],
  providers: [DjsService],
})
export class DjsModule {}

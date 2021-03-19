import { Module } from '@nestjs/common';
import { DjsModule } from './djs/djs.module';

@Module({
  imports: [DjsModule],
})
export class AppModule {}

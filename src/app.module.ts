import { Module } from '@nestjs/common';
import { DjsModule } from './djs/djs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaModule } from './sistema/sistema.module';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [
    DjsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SistemaModule,
    FeaturesModule,
  ],
  controllers: [],
})
export class AppModule {}

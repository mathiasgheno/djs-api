import { Module } from '@nestjs/common';
import { FeaturesController } from './controller/features/features.controller';
import { FeatureService } from './service/feature/feature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeaturesEntity } from './entity/features.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeaturesEntity])],
  controllers: [FeaturesController],
  providers: [FeatureService],
})
export class FeaturesModule {}

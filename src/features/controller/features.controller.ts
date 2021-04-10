import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FeatureService } from '../service/feature.service';
import { FeatureDto } from '../dto/feature.dto';

@Controller('features')
export class FeaturesController {
  constructor(private readonly featureService: FeatureService) {}

  @Post()
  criarFeature(@Body() dto: FeatureDto) {
    return this.featureService.criarFeature(
      dto.nome,
      dto.sistema,
      dto.habilitado,
    );
  }

  @Delete('/:id')
  deletarFeature(@Param('id') id: string) {
    return this.featureService.deletarFeature(id);
  }

  @Get()
  buscarFeatures() {
    return this.featureService.listar();
  }

  @Get('/:id')
  buscarPorID(@Param('id') id) {
    return this.featureService.buscar(id);
  }
}

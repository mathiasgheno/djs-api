import { Test, TestingModule } from '@nestjs/testing';
import { SistemaController } from './sistema.controller';

describe('SistemaController', () => {
  let controller: SistemaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SistemaController],
    }).compile();

    controller = module.get<SistemaController>(SistemaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

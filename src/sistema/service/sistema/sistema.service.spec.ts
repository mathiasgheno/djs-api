import { Test, TestingModule } from '@nestjs/testing';
import { SistemaService } from './sistema.service';

describe('SistemaService', () => {
  let service: SistemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SistemaService],
    }).compile();

    service = module.get<SistemaService>(SistemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

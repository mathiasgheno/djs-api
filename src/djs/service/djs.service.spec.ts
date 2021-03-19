import { Test, TestingModule } from '@nestjs/testing';
import { DjsService } from './djs.service';

describe('DjsService', () => {
  let service: DjsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DjsService],
    }).compile();

    service = module.get<DjsService>(DjsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TreatedByService } from './treated-by.service';

describe('TreatedByService', () => {
  let service: TreatedByService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreatedByService],
    }).compile();

    service = module.get<TreatedByService>(TreatedByService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

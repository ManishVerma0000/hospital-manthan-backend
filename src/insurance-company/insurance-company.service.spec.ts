import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceCompanyService } from './insurance-company.service';

describe('InsuranceCompanyService', () => {
  let service: InsuranceCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceCompanyService],
    }).compile();

    service = module.get<InsuranceCompanyService>(InsuranceCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

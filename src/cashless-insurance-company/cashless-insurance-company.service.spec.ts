import { Test, TestingModule } from '@nestjs/testing';
import { CashlessInsuranceCompanyService } from './cashless-insurance-company.service';

describe('CashlessInsuranceCompanyService', () => {
  let service: CashlessInsuranceCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashlessInsuranceCompanyService],
    }).compile();

    service = module.get<CashlessInsuranceCompanyService>(CashlessInsuranceCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { CashlessInsuranceCompanyController } from './cashless-insurance-company.controller';

describe('CashlessInsuranceCompanyController', () => {
  let controller: CashlessInsuranceCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashlessInsuranceCompanyController],
    }).compile();

    controller = module.get<CashlessInsuranceCompanyController>(CashlessInsuranceCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

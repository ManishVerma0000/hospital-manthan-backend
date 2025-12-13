import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceCompanyController } from './insurance-company.controller';

describe('InsuranceCompanyController', () => {
  let controller: InsuranceCompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceCompanyController],
    }).compile();

    controller = module.get<InsuranceCompanyController>(InsuranceCompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

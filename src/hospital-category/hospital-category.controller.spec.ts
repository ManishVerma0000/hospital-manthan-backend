import { Test, TestingModule } from '@nestjs/testing';
import { HospitalCategoryController } from './hospital-category.controller';

describe('HospitalCategoryController', () => {
  let controller: HospitalCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalCategoryController],
    }).compile();

    controller = module.get<HospitalCategoryController>(HospitalCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { HospitalCategoryService } from './hospital-category.service';

describe('HospitalCategoryService', () => {
  let service: HospitalCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalCategoryService],
    }).compile();

    service = module.get<HospitalCategoryService>(HospitalCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

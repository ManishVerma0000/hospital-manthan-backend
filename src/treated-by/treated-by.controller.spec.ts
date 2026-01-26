import { Test, TestingModule } from '@nestjs/testing';
import { TreatedByController } from './treated-by.controller';

describe('TreatedByController', () => {
  let controller: TreatedByController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TreatedByController],
    }).compile();

    controller = module.get<TreatedByController>(TreatedByController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

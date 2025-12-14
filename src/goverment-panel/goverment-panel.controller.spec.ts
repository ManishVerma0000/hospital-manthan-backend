import { Test, TestingModule } from '@nestjs/testing';
import { GovermentPanelController } from './goverment-panel.controller';

describe('GovermentPanelController', () => {
  let controller: GovermentPanelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GovermentPanelController],
    }).compile();

    controller = module.get<GovermentPanelController>(GovermentPanelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

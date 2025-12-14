import { Test, TestingModule } from '@nestjs/testing';
import { GovermentPanelService } from './goverment-panel.service';

describe('GovermentPanelService', () => {
  let service: GovermentPanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GovermentPanelService],
    }).compile();

    service = module.get<GovermentPanelService>(GovermentPanelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

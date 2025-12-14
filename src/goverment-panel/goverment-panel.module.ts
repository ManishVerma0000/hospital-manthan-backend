import { Module } from '@nestjs/common';
import { GovermentPanelController } from './goverment-panel.controller';
import { GovermentPanelService } from './goverment-panel.service';

@Module({
  controllers: [GovermentPanelController],
  providers: [GovermentPanelService]
})
export class GovermentPanelModule {}

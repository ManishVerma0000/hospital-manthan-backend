import { Module } from '@nestjs/common';
import { GovermentPanelController } from './goverment-panel.controller';
import { GovermentPanelService } from './goverment-panel.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import { GovermentPanel, GovermentPanelSchema } from './schema/government-panel.schema';

@Module({
    imports: [
      DatabaseModule,
      MongooseModule.forFeature([{ name: GovermentPanel.name, schema: GovermentPanelSchema }]),
    ],
  controllers: [GovermentPanelController],
  providers: [GovermentPanelService]
})
export class GovermentPanelModule {}

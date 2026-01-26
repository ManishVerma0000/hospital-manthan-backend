import { Module } from '@nestjs/common';
import { TreatedByController } from './treated-by.controller';
import { TreatedByService } from './treated-by.service';
import { DatabaseModule } from 'src/db/conn';
import { MongooseModule } from '@nestjs/mongoose';
import { TreatedBy, TreatedBySchema } from './schema/treated.by.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([
      { name: TreatedBy.name, schema: TreatedBySchema },
    ]),
  ],
  controllers: [TreatedByController],
  providers: [TreatedByService],
})
export class TreatedByModule {}

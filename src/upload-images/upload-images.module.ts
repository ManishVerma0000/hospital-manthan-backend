import { Module } from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { UploadImagesController } from './upload-images.controller';

@Module({
  providers: [UploadImagesService],
  controllers: [UploadImagesController]
})
export class UploadImagesModule {}

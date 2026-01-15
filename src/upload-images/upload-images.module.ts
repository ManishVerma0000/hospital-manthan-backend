import { Module } from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { UploadImagesController } from './upload-images.controller';
import { S3ConfigService } from 'src/config/s3.config';

@Module({
  providers: [UploadImagesService,S3ConfigService],
  controllers: [UploadImagesController],
  exports:[S3ConfigService]

})
export class UploadImagesModule {}

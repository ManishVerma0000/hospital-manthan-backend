import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';

@Controller('upload-images')
export class UploadImagesController {
  constructor(private readonly uploadService: UploadImagesService) {}

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multer.memoryStorage(), // 🔴 NO local files
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return {
        success: false,
        message: 'No file uploaded',
      };
    }

    const result = await this.uploadService.uploadBufferToS3(
      file.buffer,
      file.originalname,
      file.mimetype,
    );

    return {
      success: true,
      message: 'Image uploaded successfully',
      file: {
        filename: file.filename,
        url: result?.url,
      },
      // filename: result?.url,
    };
  }
}

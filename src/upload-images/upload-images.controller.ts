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
      storage: multer.diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename =
            Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
          cb(null, filename);
        },
      }),
    }),
  )
  async uploadImage(@UploadedFile() file: multer.File) {
    if (!file) {
      return {
        success: false,
        message: 'No file uploaded',
      };
    }
    const fileUrl = this.uploadService.getFileUrl(file.filename);
    return {
      success: true,
      message: 'Image uploaded successfully',
      file: {
        filename: file.filename,
        url: fileUrl,
      },
    };
  }
}

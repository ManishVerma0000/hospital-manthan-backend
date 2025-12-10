import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadImagesService {
  getFileUrl(filename: string): string {
    // Example: http://localhost:3000/uploads/17123-image.png
    return `${process.env.BASE_URL || 'http://localhost:3000'}/uploads/${filename}`;
  }
}

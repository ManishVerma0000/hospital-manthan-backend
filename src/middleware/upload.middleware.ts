import { Injectable, NestMiddleware } from '@nestjs/common';
import  multer from 'multer';
import { Request, Response, NextFunction } from 'express';
import { join } from 'path';

@Injectable()
export class UploadMiddleware implements NestMiddleware {
  private upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, join(process.cwd(), '/uploads')); // root/uploads folder
      },
      filename: (req, file, cb) => {
        cb(
          null,
          Date.now() + '-' + file.originalname.replace(/\s+/g, '_'),
        );
      },
    }),
  }).single('image'); // field name = image

  use(req: Request, res: Response, next: NextFunction) {
    this.upload(req, res, (err) => {
      if (err) {
        console.error('Upload error:', err);
        return res.status(400).json({ message: 'Upload failed', error: err });
      }
      next();
    });
  }
}

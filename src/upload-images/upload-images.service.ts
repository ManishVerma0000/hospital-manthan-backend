import { Injectable, BadRequestException } from '@nestjs/common';
import multerS3 from 'multer-s3'; // Changed from * as multerS3
import { S3 } from 'aws-sdk';
import * as crypto from 'crypto';
import { S3ConfigService } from 'src/config/s3.config';

@Injectable()
export class UploadImagesService {
  constructor(private readonly s3Config: S3ConfigService) {}
  async uploadBufferToS3(
    buffer: Buffer,
    originalname: string,
    mimetype: string,
    folder = 'uploads',
  ): Promise<{ url: string; key: string }> {
    const s3 = this.s3Config.getS3Instance();
    const bucketName = this.s3Config.getBucketName();

    const uniqueSuffix = crypto.randomBytes(16).toString('hex');
    const extension = originalname.split('.').pop();
    const key = `${folder}/${Date.now()}-${uniqueSuffix}.${extension}`;

    const params: AWS.S3.PutObjectRequest = {
      Bucket: bucketName,
      Key: key,
      Body: buffer,
      ContentType: mimetype,
    };

    const uploadResult = await s3.upload(params).promise();

    return {
      url: uploadResult.Location,
      key: uploadResult.Key,
    };
  }
}

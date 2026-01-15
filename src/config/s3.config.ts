import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class S3ConfigService {
  private readonly s3: AWS.S3;
  private readonly s3Client: S3Client;
  private readonly bucketName: string;
  private readonly region: string;

  constructor() {
    this.region = process.env.AWS_REGION || 'us-east-1';
    this.bucketName = process.env.S3_BUCKET_NAME || 'your-bucket-name';

    // For AWS SDK v2 (multer-s3 uses v2)
    this.s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: this.region,
    });

    // For AWS SDK v3
    this.s3Client = new S3Client({
      region: `${this.region}`,
      credentials: {
        accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
        secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
      },
    });
  }

  getS3Instance(): AWS.S3 {
    return this.s3;
  }

  getS3Client(): S3Client {
    return this.s3Client;
  }

  getBucketName(): string {
    return this.bucketName;
  }

  getRegion(): string {
    return this.region;
  }

  getBucketUrl(): string {
    return `https://${this.bucketName}.s3.${this.region}.amazonaws.com`;
  }
}
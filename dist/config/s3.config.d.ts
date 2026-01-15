import * as AWS from 'aws-sdk';
import { S3Client } from '@aws-sdk/client-s3';
export declare class S3ConfigService {
    private readonly s3;
    private readonly s3Client;
    private readonly bucketName;
    private readonly region;
    constructor();
    getS3Instance(): AWS.S3;
    getS3Client(): S3Client;
    getBucketName(): string;
    getRegion(): string;
    getBucketUrl(): string;
}

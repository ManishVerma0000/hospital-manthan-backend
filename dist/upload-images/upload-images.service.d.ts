import { S3ConfigService } from 'src/config/s3.config';
export declare class UploadImagesService {
    private readonly s3Config;
    constructor(s3Config: S3ConfigService);
    uploadBufferToS3(buffer: Buffer, originalname: string, mimetype: string, folder?: string): Promise<{
        url: string;
        key: string;
    }>;
}

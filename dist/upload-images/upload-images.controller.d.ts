import { UploadImagesService } from './upload-images.service';
export declare class UploadImagesController {
    private readonly uploadService;
    constructor(uploadService: UploadImagesService);
    uploadImage(file: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
        file?: undefined;
    } | {
        success: boolean;
        message: string;
        file: {
            filename: string;
            url: string;
        };
    }>;
}

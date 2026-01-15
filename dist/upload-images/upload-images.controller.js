"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagesController = void 0;
const common_1 = require("@nestjs/common");
const upload_images_service_1 = require("./upload-images.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = __importDefault(require("multer"));
let UploadImagesController = class UploadImagesController {
    uploadService;
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadImage(file) {
        if (!file) {
            return {
                success: false,
                message: 'No file uploaded',
            };
        }
        const result = await this.uploadService.uploadBufferToS3(file.buffer, file.originalname, file.mimetype);
        return {
            success: true,
            message: 'Image uploaded successfully',
            file: {
                filename: file.filename,
                url: result?.url,
            },
        };
    }
};
exports.UploadImagesController = UploadImagesController;
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: multer_1.default.memoryStorage(),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadImagesController.prototype, "uploadImage", null);
exports.UploadImagesController = UploadImagesController = __decorate([
    (0, common_1.Controller)('upload-images'),
    __metadata("design:paramtypes", [upload_images_service_1.UploadImagesService])
], UploadImagesController);
//# sourceMappingURL=upload-images.controller.js.map
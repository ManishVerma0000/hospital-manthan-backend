"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagesModule = void 0;
const common_1 = require("@nestjs/common");
const upload_images_service_1 = require("./upload-images.service");
const upload_images_controller_1 = require("./upload-images.controller");
const s3_config_1 = require("../config/s3.config");
let UploadImagesModule = class UploadImagesModule {
};
exports.UploadImagesModule = UploadImagesModule;
exports.UploadImagesModule = UploadImagesModule = __decorate([
    (0, common_1.Module)({
        providers: [upload_images_service_1.UploadImagesService, s3_config_1.S3ConfigService],
        controllers: [upload_images_controller_1.UploadImagesController],
        exports: [s3_config_1.S3ConfigService]
    })
], UploadImagesModule);
//# sourceMappingURL=upload-images.module.js.map
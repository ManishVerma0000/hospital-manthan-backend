"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadMiddleware = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
let UploadMiddleware = class UploadMiddleware {
    upload = (0, multer_1.default)({
        storage: multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, (0, path_1.join)(process.cwd(), '/uploads'));
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'));
            },
        }),
    }).single('image');
    use(req, res, next) {
        this.upload(req, res, (err) => {
            if (err) {
                console.error('Upload error:', err);
                return res.status(400).json({ message: 'Upload failed', error: err });
            }
            next();
        });
    }
};
exports.UploadMiddleware = UploadMiddleware;
exports.UploadMiddleware = UploadMiddleware = __decorate([
    (0, common_1.Injectable)()
], UploadMiddleware);
//# sourceMappingURL=upload.middleware.js.map
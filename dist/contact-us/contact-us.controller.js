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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsController = void 0;
const common_1 = require("@nestjs/common");
const contact_us_service_1 = require("./contact-us.service");
const contact_us_dto_1 = require("./dto/contact-us.dto");
let ContactUsController = class ContactUsController {
    contactUsService;
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
    }
    async create(requestBody) {
        try {
            const response = await this.contactUsService.create(requestBody);
            return {
                message: 'Government panel created successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.log(error);
            return {
                message: 'Error creating doctor',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async list() {
        try {
            const response = await this.contactUsService.getList();
            return {
                message: 'Government panel list retrieved successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.log(error);
            return {
                message: 'Error creating retrieved',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
};
exports.ContactUsController = ContactUsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contact_us_dto_1.ContactUsDto]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "list", null);
exports.ContactUsController = ContactUsController = __decorate([
    (0, common_1.Controller)('contact-us'),
    __metadata("design:paramtypes", [contact_us_service_1.ContactUsService])
], ContactUsController);
//# sourceMappingURL=contact-us.controller.js.map
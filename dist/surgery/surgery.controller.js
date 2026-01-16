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
exports.SurgeryController = void 0;
const common_1 = require("@nestjs/common");
const surgery_service_1 = require("./surgery.service");
const CreateSurgeryDto_1 = require("./dto/CreateSurgeryDto");
let SurgeryController = class SurgeryController {
    surgeryService;
    constructor(surgeryService) {
        this.surgeryService = surgeryService;
    }
    async createSurgery(dto) {
        try {
            const response = await this.surgeryService.createSurgery(dto);
            return {
                message: 'Surgery is  created successfully',
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
    async findAll() {
        try {
            const response = await this.surgeryService.findAll();
            return {
                message: 'Government panels fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching government panels',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
};
exports.SurgeryController = SurgeryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateSurgeryDto_1.CreateSurgeryDto]),
    __metadata("design:returntype", Promise)
], SurgeryController.prototype, "createSurgery", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SurgeryController.prototype, "findAll", null);
exports.SurgeryController = SurgeryController = __decorate([
    (0, common_1.Controller)('surgery'),
    __metadata("design:paramtypes", [surgery_service_1.SurgeryService])
], SurgeryController);
//# sourceMappingURL=surgery.controller.js.map
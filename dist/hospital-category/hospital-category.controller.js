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
exports.HospitalCategoryController = void 0;
const common_1 = require("@nestjs/common");
const hospital_category_service_1 = require("./hospital-category.service");
const hospital_category_dto_1 = require("./dto/hospital-category.dto");
let HospitalCategoryController = class HospitalCategoryController {
    hospitalCategoryService;
    constructor(hospitalCategoryService) {
        this.hospitalCategoryService = hospitalCategoryService;
    }
    async create(requestBody) {
        try {
            const response = await this.hospitalCategoryService.create(requestBody);
            return {
                message: 'Hospital Category created successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.log(error);
            return {
                message: 'Error creating Hospital Category',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async findAll() {
        try {
            const response = await this.hospitalCategoryService.findAll();
            return {
                message: 'Hospital Category fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Hospital Category',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async delete(id) {
        try {
            const deleted = await this.hospitalCategoryService.deleteById(id);
            return {
                message: 'Hospital Category deleted successfully',
                success: true,
                data: deleted,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: error.message || 'Error deleting Hospital Category',
                success: false,
                data: null,
                statusCode: 500,
            };
        }
    }
};
exports.HospitalCategoryController = HospitalCategoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_category_dto_1.CreateHospitalCategoryDto]),
    __metadata("design:returntype", Promise)
], HospitalCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HospitalCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalCategoryController.prototype, "delete", null);
exports.HospitalCategoryController = HospitalCategoryController = __decorate([
    (0, common_1.Controller)('hospital-category'),
    __metadata("design:paramtypes", [hospital_category_service_1.HospitalCategoryService])
], HospitalCategoryController);
//# sourceMappingURL=hospital-category.controller.js.map
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
exports.InsuranceCompanyController = void 0;
const common_1 = require("@nestjs/common");
const insurance_company_service_1 = require("./insurance-company.service");
const insurance_company_dto_1 = require("./dto/insurance-company.dto");
let InsuranceCompanyController = class InsuranceCompanyController {
    hospitalCategoryService;
    constructor(hospitalCategoryService) {
        this.hospitalCategoryService = hospitalCategoryService;
    }
    async create(requestBody) {
        try {
            const response = await this.hospitalCategoryService.create(requestBody);
            return {
                message: 'Insurance Company created successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.log(error);
            return {
                message: 'Error creating Insurance Company',
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
                message: 'Insurance Company fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Insurance Company',
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
                message: 'Insurance Company deleted successfully',
                success: true,
                data: deleted,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: error.message || 'Error deleting Insurance Company',
                success: false,
                data: null,
                statusCode: 500,
            };
        }
    }
    async update(id, requestBody) {
        try {
            const updated = await this.hospitalCategoryService.updateById(id, requestBody);
            if (!updated) {
                return {
                    message: 'Insurance Company not found',
                    success: false,
                    data: null,
                    statusCode: 404,
                };
            }
            return {
                message: 'Insurance Company updated successfully',
                success: true,
                data: updated,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: error.message || 'Error updating Insurance Company',
                success: false,
                data: null,
                statusCode: 500,
            };
        }
    }
};
exports.InsuranceCompanyController = InsuranceCompanyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insurance_company_dto_1.CreateInsuranceCompanyDto]),
    __metadata("design:returntype", Promise)
], InsuranceCompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InsuranceCompanyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InsuranceCompanyController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, insurance_company_dto_1.CreateInsuranceCompanyDto]),
    __metadata("design:returntype", Promise)
], InsuranceCompanyController.prototype, "update", null);
exports.InsuranceCompanyController = InsuranceCompanyController = __decorate([
    (0, common_1.Controller)('insurance-company'),
    __metadata("design:paramtypes", [insurance_company_service_1.InsuranceCompanyService])
], InsuranceCompanyController);
//# sourceMappingURL=insurance-company.controller.js.map
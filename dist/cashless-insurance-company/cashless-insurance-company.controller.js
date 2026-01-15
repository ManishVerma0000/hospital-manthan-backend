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
exports.CashlessInsuranceCompanyController = void 0;
const common_1 = require("@nestjs/common");
const cashless_insurance_company_service_1 = require("./cashless-insurance-company.service");
const create_cashless_insurance_dto_1 = require("./dto/create-cashless-insurance.dto");
let CashlessInsuranceCompanyController = class CashlessInsuranceCompanyController {
    cashlessInsuranceCompanyService;
    constructor(cashlessInsuranceCompanyService) {
        this.cashlessInsuranceCompanyService = cashlessInsuranceCompanyService;
    }
    async create(requestBody) {
        try {
            const response = await this.cashlessInsuranceCompanyService.create(requestBody);
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
    async findAll() {
        try {
            const response = await this.cashlessInsuranceCompanyService.findAll();
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
exports.CashlessInsuranceCompanyController = CashlessInsuranceCompanyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cashless_insurance_dto_1.CreateCashlessInsuranceDto]),
    __metadata("design:returntype", Promise)
], CashlessInsuranceCompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashlessInsuranceCompanyController.prototype, "findAll", null);
exports.CashlessInsuranceCompanyController = CashlessInsuranceCompanyController = __decorate([
    (0, common_1.Controller)('cashless-insurance-company'),
    __metadata("design:paramtypes", [cashless_insurance_company_service_1.CashlessInsuranceCompanyService])
], CashlessInsuranceCompanyController);
//# sourceMappingURL=cashless-insurance-company.controller.js.map
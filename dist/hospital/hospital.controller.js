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
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const hospital_dto_1 = require("./dto/hospital.dto");
let HospitalController = class HospitalController {
    hospitalServices;
    constructor(hospitalServices) {
        this.hospitalServices = hospitalServices;
    }
    async create(requestBody) {
        try {
            const response = await this.hospitalServices.create(requestBody);
            return {
                message: 'Hospital created successfully',
                data: response,
                success: true,
                statusCode: common_1.HttpStatus.CREATED,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                message: 'Error creating Hospital',
                data: null,
                success: false,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getListOFHospitals() {
        try {
            const response = await this.hospitalServices.getListOfHospitals();
            return {
                message: 'Hospital list retrieved successfully',
                data: response,
                success: true,
                statusCode: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                message: 'Error fetching Hospitals',
                data: null,
                success: false,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteHospital(id) {
        try {
            const deleted = await this.hospitalServices.deleteById(id);
            if (!deleted) {
                throw new common_1.HttpException('Hospital not found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                message: 'Hospital deleted successfully',
                data: deleted,
                success: true,
                statusCode: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                message: error.message ||
                    'Error deleting Hospital',
                data: null,
                success: false,
            }, error.status ||
                common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getSurgery(id) {
        try {
            const response = await this.hospitalServices.getHospitalDetails(id);
            return {
                message: 'Hospital Details  fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Hospital details',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
};
exports.HospitalController = HospitalController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [hospital_dto_1.CreateHospitalDto]),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "getListOFHospitals", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "deleteHospital", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "getSurgery", null);
exports.HospitalController = HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
//# sourceMappingURL=hospital.controller.js.map
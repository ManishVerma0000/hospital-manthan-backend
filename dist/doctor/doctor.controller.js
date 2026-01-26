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
exports.DoctorController = void 0;
const common_1 = require("@nestjs/common");
const doctor_service_1 = require("./doctor.service");
const doctor_dto_1 = require("./dto/doctor.dto");
let DoctorController = class DoctorController {
    doctorService;
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    async create(requestBody) {
        try {
            const response = await this.doctorService.create(requestBody);
            return {
                message: 'Doctor created successfully',
                data: response,
                success: true,
                statusCode: common_1.HttpStatus.CREATED,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                message: 'Error creating doctor',
                data: null,
                success: false,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getDoctorList() {
        try {
            const response = await this.doctorService.findAll();
            return {
                message: 'Doctor list fetched successfully',
                data: response,
                success: true,
                statusCode: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException({
                message: 'Error fetching doctors',
                data: null,
                success: false,
            }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteDoctor(id) {
        try {
            const deleted = await this.doctorService.deleteById(id);
            if (!deleted) {
                throw new common_1.HttpException('Doctor not found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                message: 'Doctor deleted successfully',
                data: deleted,
                success: true,
                statusCode: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                message: error.message || 'Error deleting doctor',
                data: null,
                success: false,
            }, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getSurgery(id) {
        try {
            const response = await this.doctorService.getDoctorDetails(id);
            return {
                message: 'Doctor Details  fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Doctor details',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
};
exports.DoctorController = DoctorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [doctor_dto_1.CreateDoctorDto]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getDoctorList", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "deleteDoctor", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DoctorController.prototype, "getSurgery", null);
exports.DoctorController = DoctorController = __decorate([
    (0, common_1.Controller)('doctor'),
    __metadata("design:paramtypes", [doctor_service_1.DoctorService])
], DoctorController);
//# sourceMappingURL=doctor.controller.js.map
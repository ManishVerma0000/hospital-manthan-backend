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
            console.log(response);
            return {
                message: 'Hospital created successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            return {
                message: 'Error creating Hospital',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async getListOFHospitals() {
        try {
            const response = await this.hospitalServices.getListOfHospitals();
            return {
                message: 'Hospital  list retrieved successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Hospitals',
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
exports.HospitalController = HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
//# sourceMappingURL=hospital.controller.js.map
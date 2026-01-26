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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_schema_1 = require("./schema/doctor.schema");
const mongoose_2 = require("mongoose");
let DoctorService = class DoctorService {
    doctorModel;
    constructor(doctorModel) {
        this.doctorModel = doctorModel;
    }
    async create(requestBody) {
        const role = await this.doctorModel.create(requestBody);
        return role;
    }
    async findAll() {
        return this.doctorModel
            .find()
            .populate({
            path: 'hospital',
            select: 'hospitalName city contactNumber email location',
        })
            .exec();
    }
    async deleteById(id) {
        const deleted = await this.doctorModel.findByIdAndDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException('Doctor not found');
        }
        return deleted;
    }
    async getDoctorDetails(id) {
        return await this.doctorModel
            .findById(id)
            .populate('hospital')
            .exec();
    }
    async getDoctorsByHospital(hospitalId) {
        return await this.doctorModel
            .find({ hospital: hospitalId });
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(doctor_schema_1.Doctor.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map
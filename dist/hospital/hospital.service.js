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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const hospital_schema_1 = require("./schema/hospital.schema");
const mongoose_2 = require("mongoose");
let HospitalService = class HospitalService {
    hospitalModel;
    constructor(hospitalModel) {
        this.hospitalModel = hospitalModel;
    }
    getHello() {
        return 'Hello World!';
    }
    async create(createHospitalDto) {
        const hospital = new this.hospitalModel({
            ...createHospitalDto,
            hospitalType: new mongoose_2.Types.ObjectId(createHospitalDto.hospitalType),
            treatmentList: createHospitalDto.treatmentList.map((id) => new mongoose_2.Types.ObjectId(id)),
            cashlessList: createHospitalDto.cashlessList.map((id) => new mongoose_2.Types.ObjectId(id)),
            panelList: createHospitalDto.panelList.map((id) => new mongoose_2.Types.ObjectId(id)),
        });
        return hospital.save();
    }
    getListOfHospitals() {
        return this.hospitalModel.find().exec();
    }
    async deleteById(id) {
        return this.hospitalModel.findByIdAndDelete(id);
    }
    async getHospitalDetails(id) {
        return await this.hospitalModel
            .findById(id)
            .populate('treatmentList')
            .populate('cashlessList')
            .populate('panelList')
            .populate('hospitalType')
            .exec();
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(hospital_schema_1.Hospital.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map
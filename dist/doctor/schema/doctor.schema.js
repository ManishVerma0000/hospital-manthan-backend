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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorSchema = exports.Doctor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Doctor = class Doctor {
    hospital;
    contactNumber;
    name;
    whatsAppNumber;
    status;
    treatmentProvide;
    timings;
    workingFrom;
    qualificationAndExperience;
    about;
    imageUrl;
};
exports.Doctor = Doctor;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Hospital', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Doctor.prototype, "hospital", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "contactNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "whatsAppNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Boolean)
], Doctor.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Doctor.prototype, "treatmentProvide", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                day: { type: String, required: true },
                time: { type: String, required: true },
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], Doctor.prototype, "timings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "workingFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "qualificationAndExperience", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Doctor.prototype, "about", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], required: true }),
    __metadata("design:type", Array)
], Doctor.prototype, "imageUrl", void 0);
exports.Doctor = Doctor = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Doctor);
exports.DoctorSchema = mongoose_1.SchemaFactory.createForClass(Doctor);
//# sourceMappingURL=doctor.schema.js.map
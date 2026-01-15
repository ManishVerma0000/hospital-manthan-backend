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
exports.HospitalSchema = exports.Hospital = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Hospital = class Hospital {
    hospitalName;
    hospitalType;
    contactNumber;
    whatsapp;
    email;
    city;
    mapDirection;
    location;
    iconUrl;
    imageUrls;
    timings;
    treatmentList;
    cashlessList;
    panelList;
};
exports.Hospital = Hospital;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "hospitalName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Hospital.prototype, "hospitalType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "contactNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "whatsapp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "mapDirection", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Hospital.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Hospital.prototype, "iconUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "imageUrls", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                days: { type: String },
                time: { type: String },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Hospital.prototype, "timings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: "InsuranceCompany", default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "treatmentList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: "CashlessInsuranceCompany", default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "cashlessList", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.Types.ObjectId], ref: "GovernmentPanel", default: [] }),
    __metadata("design:type", Array)
], Hospital.prototype, "panelList", void 0);
exports.Hospital = Hospital = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Hospital);
exports.HospitalSchema = mongoose_1.SchemaFactory.createForClass(Hospital);
//# sourceMappingURL=hospital.schema.js.map
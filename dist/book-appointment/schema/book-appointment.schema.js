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
exports.BookAppointmentSchema = exports.BookAppointment = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BookAppointment = class BookAppointment extends mongoose_2.Document {
    name;
    branch;
    service;
    phone;
    date;
    doctorId;
    surgeryId;
};
exports.BookAppointment = BookAppointment;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookAppointment.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookAppointment.prototype, "branch", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookAppointment.prototype, "service", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookAppointment.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookAppointment.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Doctor',
        required: false,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], BookAppointment.prototype, "doctorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'Surgery',
        required: false,
    }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], BookAppointment.prototype, "surgeryId", void 0);
exports.BookAppointment = BookAppointment = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], BookAppointment);
exports.BookAppointmentSchema = mongoose_1.SchemaFactory.createForClass(BookAppointment);
//# sourceMappingURL=book-appointment.schema.js.map
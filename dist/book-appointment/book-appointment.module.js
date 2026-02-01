"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAppointmentModule = void 0;
const common_1 = require("@nestjs/common");
const book_appointment_controller_1 = require("./book-appointment.controller");
const book_appointment_service_1 = require("./book-appointment.service");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const book_appointment_schema_1 = require("./schema/book-appointment.schema");
const doctor_schema_1 = require("../doctor/schema/doctor.schema");
const surgery_schema_1 = require("../surgery/schema/surgery.schema");
let BookAppointmentModule = class BookAppointmentModule {
};
exports.BookAppointmentModule = BookAppointmentModule;
exports.BookAppointmentModule = BookAppointmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([
                { name: book_appointment_schema_1.BookAppointment.name, schema: book_appointment_schema_1.BookAppointmentSchema },
                { name: doctor_schema_1.Doctor.name, schema: doctor_schema_1.DoctorSchema },
                { name: surgery_schema_1.Surgery.name, schema: surgery_schema_1.SurgerySchema },
            ]),
        ],
        controllers: [book_appointment_controller_1.BookAppointmentController],
        providers: [book_appointment_service_1.BookAppointmentService],
    })
], BookAppointmentModule);
//# sourceMappingURL=book-appointment.module.js.map
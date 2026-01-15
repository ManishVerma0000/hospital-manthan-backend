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
exports.BookAppointmentController = void 0;
const common_1 = require("@nestjs/common");
const book_appointment_service_1 = require("./book-appointment.service");
const book_appointment_dto_1 = require("./dto/book-appointment.dto");
let BookAppointmentController = class BookAppointmentController {
    bookAppointementService;
    constructor(bookAppointementService) {
        this.bookAppointementService = bookAppointementService;
    }
    async create(requestBody) {
        try {
            const response = await this.bookAppointementService.create(requestBody);
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
    async list() {
        try {
            const response = await this.bookAppointementService.getList();
            return {
                message: 'Book Appointment list retrieved successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.log(error);
            return {
                message: ' Error during Appointment creating retrieved',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
};
exports.BookAppointmentController = BookAppointmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_appointment_dto_1.BookAppointmentDto]),
    __metadata("design:returntype", Promise)
], BookAppointmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookAppointmentController.prototype, "list", null);
exports.BookAppointmentController = BookAppointmentController = __decorate([
    (0, common_1.Controller)('book-appointment'),
    __metadata("design:paramtypes", [book_appointment_service_1.BookAppointmentService])
], BookAppointmentController);
//# sourceMappingURL=book-appointment.controller.js.map
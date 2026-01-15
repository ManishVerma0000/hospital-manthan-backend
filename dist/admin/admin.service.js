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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_schema_1 = require("./schema/admin.schema");
const mongoose_2 = require("mongoose");
let AdminService = class AdminService {
    adminModel;
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async create(requestBody) {
        const response = await this.adminModel.create({
            username: requestBody?.username,
            password: requestBody?.password
        });
        return response;
    }
    async login(requestBody) {
        const validateUser = await this.adminModel.findOne({
            username: requestBody.username,
        });
        if (!validateUser || validateUser.password != requestBody.password) {
            throw Error('Invalid user');
        }
        const sendUserDetails = await this.adminModel
            .findOne({
            username: requestBody.username,
        })
            .select('username');
        return sendUserDetails;
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(admin_schema_1.Admin.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminService);
//# sourceMappingURL=admin.service.js.map
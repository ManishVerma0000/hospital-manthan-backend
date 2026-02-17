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
exports.TreatedByController = void 0;
const common_1 = require("@nestjs/common");
const treated_by_service_1 = require("./treated-by.service");
const treated_by_dto_1 = require("./dto/treated-by.dto");
let TreatedByController = class TreatedByController {
    treatedByService;
    constructor(treatedByService) {
        this.treatedByService = treatedByService;
    }
    async create(body) {
        try {
            const response = await this.treatedByService.create(body);
            return {
                message: 'Treated By created successfully',
                data: response,
                success: true,
                statusCode: 201,
            };
        }
        catch (error) {
            console.error(error);
            return {
                message: 'Error creating Treated By',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async findAll() {
        try {
            const response = await this.treatedByService.findAll();
            return {
                message: 'Treated By fetched successfully',
                data: response,
                success: true,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: 'Error fetching Treated By',
                data: null,
                success: false,
                statusCode: 500,
                error: error.message,
            };
        }
    }
    async delete(id) {
        try {
            const deleted = await this.treatedByService.deleteById(id);
            return {
                message: 'Treated By deleted successfully',
                success: true,
                data: deleted,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: error.message || 'Delete failed',
                success: false,
                data: null,
                statusCode: 500,
            };
        }
    }
    async update(id, body) {
        try {
            const updated = await this.treatedByService.updateById(id, body);
            if (!updated) {
                return {
                    message: 'Treated By not found',
                    success: false,
                    data: null,
                    statusCode: 404,
                };
            }
            return {
                message: 'Treated By updated successfully',
                success: true,
                data: updated,
                statusCode: 200,
            };
        }
        catch (error) {
            return {
                message: error.message || 'Update failed',
                success: false,
                data: null,
                statusCode: 500,
            };
        }
    }
};
exports.TreatedByController = TreatedByController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [treated_by_dto_1.TreatedByDto]),
    __metadata("design:returntype", Promise)
], TreatedByController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TreatedByController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TreatedByController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, treated_by_dto_1.TreatedByDto]),
    __metadata("design:returntype", Promise)
], TreatedByController.prototype, "update", null);
exports.TreatedByController = TreatedByController = __decorate([
    (0, common_1.Controller)('treated-by'),
    __metadata("design:paramtypes", [treated_by_service_1.TreatedByService])
], TreatedByController);
//# sourceMappingURL=treated-by.controller.js.map
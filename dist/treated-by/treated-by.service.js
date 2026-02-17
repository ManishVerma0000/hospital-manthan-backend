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
exports.TreatedByService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const treated_by_schema_1 = require("./schema/treated.by.schema");
let TreatedByService = class TreatedByService {
    treatedByModel;
    constructor(treatedByModel) {
        this.treatedByModel = treatedByModel;
    }
    async create(dto) {
        return await this.treatedByModel.create(dto);
    }
    async findAll() {
        return await this.treatedByModel.find().sort({ createdAt: -1 });
    }
    async deleteById(id) {
        return await this.treatedByModel.findByIdAndDelete(id);
    }
    async updateById(id, payload) {
        return await this.treatedByModel
            .findByIdAndUpdate(id, payload, { new: true })
            .exec();
    }
};
exports.TreatedByService = TreatedByService;
exports.TreatedByService = TreatedByService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(treated_by_schema_1.TreatedBy.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TreatedByService);
//# sourceMappingURL=treated-by.service.js.map
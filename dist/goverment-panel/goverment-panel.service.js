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
exports.GovermentPanelService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const government_panel_schema_1 = require("./schema/government-panel.schema");
const mongoose_2 = require("mongoose");
let GovermentPanelService = class GovermentPanelService {
    govermentPanelModel;
    constructor(govermentPanelModel) {
        this.govermentPanelModel = govermentPanelModel;
    }
    async create(requestBody) {
        const response = await this.govermentPanelModel.create(requestBody);
        return response;
    }
    async findAll() {
        const response = await this.govermentPanelModel.find().exec();
        return response;
    }
    async deleteById(id) {
        const response = await this.govermentPanelModel
            .findByIdAndDelete(id)
            .exec();
        return response;
    }
};
exports.GovermentPanelService = GovermentPanelService;
exports.GovermentPanelService = GovermentPanelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(government_panel_schema_1.GovermentPanel.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], GovermentPanelService);
//# sourceMappingURL=goverment-panel.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovermentPanelModule = void 0;
const common_1 = require("@nestjs/common");
const goverment_panel_controller_1 = require("./goverment-panel.controller");
const goverment_panel_service_1 = require("./goverment-panel.service");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const government_panel_schema_1 = require("./schema/government-panel.schema");
let GovermentPanelModule = class GovermentPanelModule {
};
exports.GovermentPanelModule = GovermentPanelModule;
exports.GovermentPanelModule = GovermentPanelModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([{ name: government_panel_schema_1.GovermentPanel.name, schema: government_panel_schema_1.GovermentPanelSchema }]),
        ],
        controllers: [goverment_panel_controller_1.GovermentPanelController],
        providers: [goverment_panel_service_1.GovermentPanelService]
    })
], GovermentPanelModule);
//# sourceMappingURL=goverment-panel.module.js.map
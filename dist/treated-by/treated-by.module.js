"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatedByModule = void 0;
const common_1 = require("@nestjs/common");
const treated_by_controller_1 = require("./treated-by.controller");
const treated_by_service_1 = require("./treated-by.service");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const treated_by_schema_1 = require("./schema/treated.by.schema");
let TreatedByModule = class TreatedByModule {
};
exports.TreatedByModule = TreatedByModule;
exports.TreatedByModule = TreatedByModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([
                { name: treated_by_schema_1.TreatedBy.name, schema: treated_by_schema_1.TreatedBySchema },
            ]),
        ],
        controllers: [treated_by_controller_1.TreatedByController],
        providers: [treated_by_service_1.TreatedByService],
    })
], TreatedByModule);
//# sourceMappingURL=treated-by.module.js.map
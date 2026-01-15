"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const hospital_category_service_1 = require("./hospital-category.service");
const hospital_category_controller_1 = require("./hospital-category.controller");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const hospital_category_schema_1 = require("./schema/hospital-category.schema");
let HospitalCategoryModule = class HospitalCategoryModule {
};
exports.HospitalCategoryModule = HospitalCategoryModule;
exports.HospitalCategoryModule = HospitalCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([
                { name: hospital_category_schema_1.HospitalCategory.name, schema: hospital_category_schema_1.HospitalCategorySchema },
            ]),
        ],
        providers: [hospital_category_service_1.HospitalCategoryService],
        controllers: [hospital_category_controller_1.HospitalCategoryController],
    })
], HospitalCategoryModule);
//# sourceMappingURL=hospital-category.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const insurance_company_service_1 = require("./insurance-company.service");
const insurance_company_controller_1 = require("./insurance-company.controller");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const insurance_company_schema_1 = require("./schema/insurance-company.schema");
let InsuranceCompanyModule = class InsuranceCompanyModule {
};
exports.InsuranceCompanyModule = InsuranceCompanyModule;
exports.InsuranceCompanyModule = InsuranceCompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([
                { name: insurance_company_schema_1.InsuranceCompany.name, schema: insurance_company_schema_1.InsuranceCompanySchema },
            ]),
        ],
        providers: [insurance_company_service_1.InsuranceCompanyService],
        controllers: [insurance_company_controller_1.InsuranceCompanyController],
    })
], InsuranceCompanyModule);
//# sourceMappingURL=insurance-company.module.js.map
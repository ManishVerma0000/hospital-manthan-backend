"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashlessInsuranceCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const cashless_insurance_company_controller_1 = require("./cashless-insurance-company.controller");
const cashless_insurance_company_service_1 = require("./cashless-insurance-company.service");
const conn_1 = require("../db/conn");
const mongoose_1 = require("@nestjs/mongoose");
const cashless_insurance_schema_1 = require("./schema/cashless-insurance.schema");
let CashlessInsuranceCompanyModule = class CashlessInsuranceCompanyModule {
};
exports.CashlessInsuranceCompanyModule = CashlessInsuranceCompanyModule;
exports.CashlessInsuranceCompanyModule = CashlessInsuranceCompanyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            conn_1.DatabaseModule,
            mongoose_1.MongooseModule.forFeature([
                { name: cashless_insurance_schema_1.CashlessInsurance.name, schema: cashless_insurance_schema_1.CashlessInsuranceSchema },
            ]),
        ],
        controllers: [cashless_insurance_company_controller_1.CashlessInsuranceCompanyController],
        providers: [cashless_insurance_company_service_1.CashlessInsuranceCompanyService],
    })
], CashlessInsuranceCompanyModule);
//# sourceMappingURL=cashless-insurance-company.module.js.map
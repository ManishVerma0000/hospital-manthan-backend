"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const doctor_module_1 = require("./doctor/doctor.module");
const categories_module_1 = require("./categories/categories.module");
const upload_middleware_1 = require("./middleware/upload.middleware");
const upload_images_module_1 = require("./upload-images/upload-images.module");
const hospital_module_1 = require("./hospital/hospital.module");
const hospital_category_module_1 = require("./hospital-category/hospital-category.module");
const insurance_company_module_1 = require("./insurance-company/insurance-company.module");
const cashless_insurance_company_module_1 = require("./cashless-insurance-company/cashless-insurance-company.module");
const goverment_panel_module_1 = require("./goverment-panel/goverment-panel.module");
const book_appointment_module_1 = require("./book-appointment/book-appointment.module");
const contact_us_module_1 = require("./contact-us/contact-us.module");
const admin_module_1 = require("./admin/admin.module");
const surgery_module_1 = require("./surgery/surgery.module");
const treated_by_module_1 = require("./treated-by/treated-by.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(upload_middleware_1.UploadMiddleware).forRoutes('upload-image');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    uri: configService.get('MONGO_URI')
                }),
            }), doctor_module_1.DoctorModule, categories_module_1.CategoriesModule, upload_images_module_1.UploadImagesModule, hospital_module_1.HospitalModule, hospital_category_module_1.HospitalCategoryModule, insurance_company_module_1.InsuranceCompanyModule, cashless_insurance_company_module_1.CashlessInsuranceCompanyModule, goverment_panel_module_1.GovermentPanelModule, book_appointment_module_1.BookAppointmentModule, contact_us_module_1.ContactUsModule, admin_module_1.AdminModule, surgery_module_1.SurgeryModule, treated_by_module_1.TreatedByModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
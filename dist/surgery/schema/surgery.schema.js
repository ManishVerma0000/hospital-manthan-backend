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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurgerySchema = exports.Surgery = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Surgery = class Surgery {
    surgeryName;
    diseaseNeme;
    surgeryCategory;
    duration;
    recoveryTime;
    treatedBy;
    costingRange;
    icon;
    images;
    symptoms;
    procedureTimeline;
    benefits;
    risks;
    recoveryTimeline;
    faqs;
};
exports.Surgery = Surgery;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "surgeryName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Surgery.prototype, "diseaseNeme", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "surgeryCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "recoveryTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "treatedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Surgery.prototype, "costingRange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Surgery.prototype, "icon", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Surgery.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                subcategory: { type: String, required: true },
                paragraph: { type: String },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Surgery.prototype, "symptoms", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                step: { type: String, required: true },
                typeProcedure: { type: String },
                duration: { type: String },
                medication: { type: String },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Surgery.prototype, "procedureTimeline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Surgery.prototype, "benefits", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Surgery.prototype, "risks", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                stage: { type: String },
                mention: { type: String },
                lightCare: { type: String },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Surgery.prototype, "recoveryTimeline", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [
            {
                question: { type: String, required: true },
                answer: { type: String, required: true },
            },
        ],
        default: [],
    }),
    __metadata("design:type", Array)
], Surgery.prototype, "faqs", void 0);
exports.Surgery = Surgery = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Surgery);
exports.SurgerySchema = mongoose_1.SchemaFactory.createForClass(Surgery);
//# sourceMappingURL=surgery.schema.js.map
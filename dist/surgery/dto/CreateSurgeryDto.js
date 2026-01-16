"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqDto = exports.RecoveryTimelineDto = exports.ProcedureTimelineDto = exports.SymptomDto = exports.CreateSurgeryDto = void 0;
class CreateSurgeryDto {
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
}
exports.CreateSurgeryDto = CreateSurgeryDto;
class SymptomDto {
    subcategory;
    paragraph;
}
exports.SymptomDto = SymptomDto;
class ProcedureTimelineDto {
    step;
    typeProcedure;
    duration;
    medication;
}
exports.ProcedureTimelineDto = ProcedureTimelineDto;
class RecoveryTimelineDto {
    stage;
    mention;
    lightCare;
}
exports.RecoveryTimelineDto = RecoveryTimelineDto;
class FaqDto {
    question;
    answer;
}
exports.FaqDto = FaqDto;
//# sourceMappingURL=CreateSurgeryDto.js.map
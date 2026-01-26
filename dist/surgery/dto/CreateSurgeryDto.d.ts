export declare class CreateSurgeryDto {
    surgeryName: string;
    diseaseNeme?: string;
    surgeryCategory: string;
    duration: string;
    recoveryTime: string;
    treatedBy: string;
    costingRange: string;
    paragraph: string;
    icon?: string;
    images?: string[];
    symptoms?: SymptomDto[];
    procedureTimeline?: ProcedureTimelineDto[];
    benefits?: string[];
    risks?: string[];
    recoveryTimeline?: RecoveryTimelineDto[];
    faqs?: FaqDto[];
}
export declare class SymptomDto {
    subcategory: string;
    paragraph?: string;
}
export declare class ProcedureTimelineDto {
    step: string;
    typeProcedure?: string;
    duration?: string;
    medication?: string;
}
export declare class RecoveryTimelineDto {
    stage?: string;
    mention?: string;
    lightCare?: string;
}
export declare class FaqDto {
    question: string;
    answer: string;
}

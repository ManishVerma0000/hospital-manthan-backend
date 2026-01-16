export class CreateSurgeryDto {
  // BASIC DETAILS
  surgeryName: string;
  diseaseNeme?: string;
  surgeryCategory: string;
  duration: string;
  recoveryTime: string;
  treatedBy: string;
  costingRange: string;

  // IMAGES
  icon?: string;
  images?: string[];

  // SECTIONS
  symptoms?: SymptomDto[];
  procedureTimeline?: ProcedureTimelineDto[];
  benefits?: string[];
  risks?: string[];
  recoveryTimeline?: RecoveryTimelineDto[];
  faqs?: FaqDto[];
}

export class SymptomDto {
  subcategory: string;
  paragraph?: string;
}

export class ProcedureTimelineDto {
  step: string;
  typeProcedure?: string;
  duration?: string;
  medication?: string;
}

export class RecoveryTimelineDto {
  stage?: string;
  mention?: string;
  lightCare?: string;
}

export class FaqDto {
  question: string;
  answer: string;
}

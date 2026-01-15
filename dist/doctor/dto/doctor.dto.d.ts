export declare class CreateDoctorDto {
    hospital: string;
    contactNumber: string;
    whatsAppNumber: string;
    treatmentProvide: string;
    timings: TimingDto[];
    workingFrom: string;
    qualificationAndExperience: string;
    about: string;
    imageUrl: string;
}
export declare class TimingDto {
    day: string;
    time: string;
}

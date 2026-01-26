export declare class CreateDoctorDto {
    hospital: string;
    name: string;
    contactNumber: string;
    whatsAppNumber: string;
    treatmentProvide: string;
    timings: TimingDto[];
    workingFrom: string;
    qualificationAndExperience: string;
    about: string;
    status: boolean;
    imageUrl: string;
}
export declare class TimingDto {
    day: string;
    time: string;
}

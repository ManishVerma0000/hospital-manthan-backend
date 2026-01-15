declare class TimingDto {
    days: string;
    time: string;
}
export declare class CreateHospitalDto {
    hospitalName: string;
    hospitalType: string;
    contactNumber: string;
    whatsapp: string;
    email: string;
    city: string;
    mapDirection: string;
    location: string;
    iconUrl?: string;
    imageUrls: string[];
    timings: TimingDto[];
    treatmentList: string[];
    cashlessList: string[];
    panelList: string[];
}
export {};

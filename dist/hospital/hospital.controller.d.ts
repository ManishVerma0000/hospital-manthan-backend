import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/hospital.dto';
export declare class HospitalController {
    private readonly hospitalServices;
    constructor(hospitalServices: HospitalService);
    create(requestBody: CreateHospitalDto): Promise<any>;
    getListOFHospitals(): Promise<any>;
}

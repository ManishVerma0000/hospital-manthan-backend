import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(requestBody: CreateDoctorDto): Promise<any>;
    getDoctorList(): Promise<any>;
    deleteDoctor(id: string): Promise<any>;
}

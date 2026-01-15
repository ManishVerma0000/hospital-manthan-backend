import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(requestBody: CreateDoctorDto): Promise<any>;
    findAll(): Promise<any>;
}

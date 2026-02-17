import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/doctor.dto';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    create(requestBody: CreateDoctorDto): Promise<any>;
    getDoctorList(): Promise<any>;
    deleteDoctor(id: string): Promise<any>;
    updateDoctor(id: string, requestBody: CreateDoctorDto): Promise<any>;
    getSurgery(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/doctor.schema").DoctorDocument, {}, {}> & import("./schema/doctor.schema").Doctor & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
        success: boolean;
        statusCode: number;
        error?: undefined;
    } | {
        message: string;
        data: null;
        success: boolean;
        statusCode: number;
        error: any;
    }>;
    getDoctorsByHospital(hospitalId: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/doctor.schema").DoctorDocument, {}, {}> & import("./schema/doctor.schema").Doctor & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
        success: boolean;
        statusCode: number;
        error?: undefined;
    } | {
        message: string;
        data: null;
        success: boolean;
        statusCode: number;
        error: any;
    }>;
}

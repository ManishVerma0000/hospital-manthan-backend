import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/hospital.dto';
export declare class HospitalController {
    private readonly hospitalServices;
    constructor(hospitalServices: HospitalService);
    create(requestBody: CreateHospitalDto): Promise<any>;
    getListOFHospitals(): Promise<any>;
    deleteHospital(id: string): Promise<any>;
    updateHospital(id: string, requestBody: CreateHospitalDto): Promise<any>;
    getSurgery(id: string): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/hospital.schema").HospitalDocument, {}, {}> & import("./schema/hospital.schema").Hospital & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
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
}

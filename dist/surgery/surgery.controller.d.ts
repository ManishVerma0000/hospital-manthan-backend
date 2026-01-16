import { SurgeryService } from './surgery.service';
import { CreateSurgeryDto } from './dto/CreateSurgeryDto';
export declare class SurgeryController {
    private readonly surgeryService;
    constructor(surgeryService: SurgeryService);
    createSurgery(dto: CreateSurgeryDto): Promise<{
        message: string;
        data: {
            success: boolean;
            message: string;
            data: import("mongoose").Document<unknown, {}, import("./schema/surgery.schema").SurgeryDocument, {}, {}> & import("./schema/surgery.schema").Surgery & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            };
        };
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
    findAll(): Promise<any>;
}

import { TreatedByService } from './treated-by.service';
import { TreatedByDto } from './dto/treated-by.dto';
export declare class TreatedByController {
    private readonly treatedByService;
    constructor(treatedByService: TreatedByService);
    create(body: TreatedByDto): Promise<any>;
    findAll(): Promise<any>;
    delete(id: string): Promise<{
        message: string;
        success: boolean;
        data: (import("mongoose").Document<unknown, {}, import("./schema/treated.by.schema").TreatedByDocument, {}, {}> & import("./schema/treated.by.schema").TreatedBy & import("mongoose").Document<import("mongoose").Types.ObjectId, any, any, Record<string, any>, {}> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }) | null;
        statusCode: number;
    } | {
        message: any;
        success: boolean;
        data: null;
        statusCode: number;
    }>;
    update(id: string, body: TreatedByDto): Promise<any>;
}

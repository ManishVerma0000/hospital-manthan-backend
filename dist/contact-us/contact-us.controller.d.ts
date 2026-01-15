import { ContactUsService } from './contact-us.service';
import { ContactUsDto } from './dto/contact-us.dto';
export declare class ContactUsController {
    private readonly contactUsService;
    constructor(contactUsService: ContactUsService);
    create(requestBody: ContactUsDto): Promise<any>;
    list(): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/contact-us.schema").ContactUs, {}, {}> & import("./schema/contact-us.schema").ContactUs & Required<{
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

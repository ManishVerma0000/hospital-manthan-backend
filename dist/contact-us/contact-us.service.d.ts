import { ContactUs } from './schema/contact-us.schema';
import { Model } from 'mongoose';
export declare class ContactUsService {
    private contactUsModel;
    constructor(contactUsModel: Model<ContactUs>);
    create(requestBody: any): Promise<any>;
    getList(): Promise<(import("mongoose").Document<unknown, {}, ContactUs, {}, {}> & ContactUs & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}

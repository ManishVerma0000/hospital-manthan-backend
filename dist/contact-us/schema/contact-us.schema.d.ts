import { Document } from 'mongoose';
export declare class ContactUs extends Document {
    name: string;
    mobileNumber: string;
    email?: string;
    city: string;
    remark?: string;
}
export declare const ContactUsSchema: import("mongoose").Schema<ContactUs, import("mongoose").Model<ContactUs, any, any, any, Document<unknown, any, ContactUs, any, {}> & ContactUs & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactUs, Document<unknown, {}, import("mongoose").FlatRecord<ContactUs>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ContactUs> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;

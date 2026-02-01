import { Document, Types } from 'mongoose';
export declare class BookAppointment extends Document {
    name: string;
    branch: string;
    service: string;
    phone: string;
    date: string;
    doctorId?: Types.ObjectId;
    surgeryId?: Types.ObjectId;
}
export declare const BookAppointmentSchema: import("mongoose").Schema<BookAppointment, import("mongoose").Model<BookAppointment, any, any, any, Document<unknown, any, BookAppointment, any, {}> & BookAppointment & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BookAppointment, Document<unknown, {}, import("mongoose").FlatRecord<BookAppointment>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<BookAppointment> & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
}>;

import { BookAppointment } from './schema/book-appointment.schema';
import { Model } from 'mongoose';
export declare class BookAppointmentService {
    private bookAppointment;
    constructor(bookAppointment: Model<BookAppointment>);
    create(requestBody: any): Promise<any>;
    getList(): Promise<(import("mongoose").Document<unknown, {}, BookAppointment, {}, {}> & BookAppointment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    })[]>;
}

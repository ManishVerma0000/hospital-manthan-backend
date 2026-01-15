import { BookAppointmentService } from './book-appointment.service';
import { BookAppointmentDto } from './dto/book-appointment.dto';
export declare class BookAppointmentController {
    private readonly bookAppointementService;
    constructor(bookAppointementService: BookAppointmentService);
    create(requestBody: BookAppointmentDto): Promise<any>;
    list(): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schema/book-appointment.schema").BookAppointment, {}, {}> & import("./schema/book-appointment.schema").BookAppointment & Required<{
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

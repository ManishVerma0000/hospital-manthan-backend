import { Admin } from './schema/admin.schema';
import { Model } from 'mongoose';
import { AdminLoginDto } from './dto/admin.login.dto';
import { AdminRegisterDto } from './dto/admin.register.dto';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: Model<Admin>);
    create(requestBody: AdminRegisterDto): Promise<import("mongoose").Document<unknown, {}, Admin, {}, {}> & Admin & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    login(requestBody: AdminLoginDto): Promise<(import("mongoose").Document<unknown, {}, Admin, {}, {}> & Admin & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }) | null>;
}

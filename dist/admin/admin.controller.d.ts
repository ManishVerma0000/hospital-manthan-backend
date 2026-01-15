import { AdminService } from './admin.service';
import { AdminLoginDto } from './dto/admin.login.dto';
export declare class AdminController {
    private readonly adminServices;
    constructor(adminServices: AdminService);
    create(requestBody: AdminLoginDto): Promise<any>;
    login(requestBody: AdminLoginDto): Promise<any>;
}

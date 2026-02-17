import { GovermentPanelService } from './goverment-panel.service';
import { CreateGovernmentPanelDto } from './dto/create-government-panel.dto';
export declare class GovermentPanelController {
    private readonly govermentPanelService;
    constructor(govermentPanelService: GovermentPanelService);
    create(requestBody: CreateGovernmentPanelDto): Promise<any>;
    findAll(): Promise<any>;
    delete(id: string): Promise<{
        message: string;
        success: boolean;
        data: any;
        statusCode: number;
    } | {
        message: any;
        success: boolean;
        data: null;
        statusCode: number;
    }>;
    update(id: string, requestBody: CreateGovernmentPanelDto): Promise<any>;
}

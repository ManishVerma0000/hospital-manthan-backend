import { GovermentPanelDocument } from './schema/government-panel.schema';
import { Model } from 'mongoose';
export declare class GovermentPanelService {
    private govermentPanelModel;
    constructor(govermentPanelModel: Model<GovermentPanelDocument>);
    create(requestBody: any): Promise<any>;
    findAll(): Promise<any[]>;
    deleteById(id: string): Promise<any>;
    updateById(id: string, payload: any): Promise<any>;
}

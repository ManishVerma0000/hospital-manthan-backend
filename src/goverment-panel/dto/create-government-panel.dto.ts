import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGovernmentPanelDto {
  @IsString()
  @IsNotEmpty()
  panelName: string;
}

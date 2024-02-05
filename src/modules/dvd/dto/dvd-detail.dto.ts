import { IsNotEmpty, IsString } from 'class-validator';

export class DvdDetailDTO {
  @IsString()
  @IsNotEmpty()
  dvdId: string;
}

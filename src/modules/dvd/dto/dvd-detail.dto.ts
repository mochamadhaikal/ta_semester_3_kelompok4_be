import { IsNotEmpty, IsNumber } from 'class-validator';

export class DvdDetailDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}

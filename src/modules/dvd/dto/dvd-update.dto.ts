import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DvdUpdateDTO {
  @IsNumber()
  @IsNotEmpty()
  dvdId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  actorName: string;
}

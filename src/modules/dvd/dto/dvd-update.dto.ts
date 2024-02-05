import { IsNotEmpty, IsString } from 'class-validator';

export class DvdUpdateDTO {
  @IsString()
  @IsNotEmpty()
  dvdId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  actorName: string;
}

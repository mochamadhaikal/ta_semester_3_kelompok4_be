import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DvdCreateDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  actorName: string;
}

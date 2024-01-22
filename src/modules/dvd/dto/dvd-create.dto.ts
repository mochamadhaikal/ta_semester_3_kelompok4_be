import { IsNotEmpty, IsString } from 'class-validator';

export class DvdCreateDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  actorName: string;
}

import { IsNotEmpty, IsString } from 'class-validator';

export class ProcessImportDto {
  @IsString()
  @IsNotEmpty()
  importId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

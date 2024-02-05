import { Transform } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinDate,
} from 'class-validator';

export class LoanCreateDTO {
  @IsNumber()
  @IsNotEmpty()
  friendId: number;

  @IsString()
  @IsNotEmpty()
  dvdId: string;

  @IsNotEmpty()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @MinDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000))
  loanDate: Date;

  @IsNotEmpty()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @MinDate(new Date())
  returnDate: Date;
}

import { Transform } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, MinDate } from 'class-validator';

export class LoanCreateDTO {
  @IsNumber()
  @IsNotEmpty()
  friendId: number;

  @IsNumber()
  @IsNotEmpty()
  dvdId: number;

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

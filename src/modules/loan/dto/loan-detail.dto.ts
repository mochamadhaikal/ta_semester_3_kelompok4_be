import { IsNotEmpty, IsNumber } from 'class-validator';

export class LoanDetailDTO {
  @IsNumber()
  @IsNotEmpty()
  loanId: number;
}

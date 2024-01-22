import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './entities';
import { LoanDetailDTO, LoanCreateDTO, LoanUpdateDTO } from './dto';
import { Res } from 'src/configs';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get('/all')
  findAll(): Promise<Loan[]> {
    return this.loanService.findAll();
  }

  @Post('/detail')
  findOne(@Body() item: LoanDetailDTO): Promise<Loan> {
    return this.loanService.findOne(item);
  }

  @Post('/save')
  create(@Body() item: LoanCreateDTO): Promise<Res> {
    return this.loanService.create(item);
  }

  @Post('/edit')
  async update(@Body() itemUpdate: LoanUpdateDTO): Promise<Res> {
    return this.loanService.update(itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() item: LoanDetailDTO): Promise<Res> {
    return this.loanService.delete(item);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoanService } from './loan.service';
import { Loan } from './entities';

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Get('/all')
  findAll(): Promise<Loan[]> {
    return this.loanService.findAll();
  }

  @Get('/detail/:id')
  findOne(@Param('id') id: number): Promise<Loan> {
    return this.loanService.findOne(id);
  }

  @Post('/save')
  create(@Body() item: Loan): Promise<Loan> {
    return this.loanService.create(item);
  }

  @Post('/edit')
  async update(@Body() id: number, itemUpdate: Loan): Promise<Loan> {
    return this.loanService.update(id, itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() id: number): Promise<void> {
    return this.loanService.delete(id);
  }
}

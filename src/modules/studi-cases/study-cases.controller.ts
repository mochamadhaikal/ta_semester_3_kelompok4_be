import { Controller, Get } from '@nestjs/common';
import { CasesService } from './study-cases.service';

@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get('/1')
  getQuizOne() {
    return this.casesService.getQuizOne();
  }
  @Get('/2')
  getQuizTwo() {
    return this.casesService.getQuizTwo();
  }
  @Get('/3')
  getQuizThree() {
    return this.casesService.getQuizThree();
  }
}

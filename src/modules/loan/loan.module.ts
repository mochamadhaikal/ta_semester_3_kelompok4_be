import { Module } from '@nestjs/common';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Loan])],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}

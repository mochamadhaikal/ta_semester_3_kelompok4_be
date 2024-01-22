import { Module } from '@nestjs/common';
import { DvdController } from './dvd.controller';
import { DvdService } from './dvd.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dvd } from './entities';
import { Friend } from '../friend/entities';
import { Loan } from '../loan/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Dvd, Friend, Loan])],
  controllers: [DvdController],
  providers: [DvdService],
})
export class DvdModule {}

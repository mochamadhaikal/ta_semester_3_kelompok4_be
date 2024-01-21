import { Module } from '@nestjs/common';
import { DvdController } from './dvd.controller';
import { DvdService } from './dvd.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dvd } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Dvd])],
  controllers: [DvdController],
  providers: [DvdService],
})
export class DvdModule {}

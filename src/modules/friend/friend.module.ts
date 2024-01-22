import { Module } from '@nestjs/common';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from './entities';
import { Loan } from '../loan/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Friend, Loan])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}

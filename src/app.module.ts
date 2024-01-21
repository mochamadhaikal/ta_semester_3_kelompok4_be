import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FriendModule } from './modules/friend/friend.module';
import { LoanModule } from './modules/loan/loan.module';
import { DvdModule } from './modules/dvd/dvd.module';
import { envConfigOptions, typeOrmConfig } from './configs';

@Module({
  imports: [
    ConfigModule.forRoot(envConfigOptions),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    FriendModule,
    LoanModule,
    DvdModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

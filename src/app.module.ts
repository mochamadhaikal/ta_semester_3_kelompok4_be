import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FriendModule } from './modules/friend/friend.module';
import { LoanModule } from './modules/loan/loan.module';
import { DvdModule } from './modules/dvd/dvd.module';
import { envConfigOptions, typeOrmConfig } from './configs';
import { CasesModule } from './modules/studi-cases/study-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfigOptions),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    FriendModule,
    LoanModule,
    DvdModule,
    CasesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

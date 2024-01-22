import { Module } from '@nestjs/common';
import { CasesController } from './study-cases.controller';
import { CasesService } from './study-cases.service';

@Module({
  imports: [],
  controllers: [CasesController],
  providers: [CasesService],
})
export class CasesModule {}

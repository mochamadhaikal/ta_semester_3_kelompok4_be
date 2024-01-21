import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { IDatabaseEnv } from './env.config';

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      type: 'mysql',
      url: configService.get<IDatabaseEnv>('database').url,
      synchronize: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    };
  },
};

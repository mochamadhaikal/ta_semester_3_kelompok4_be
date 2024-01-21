import { ConfigModuleOptions } from '@nestjs/config';
import { Dvd } from 'src/modules/dvd/entities';

export interface IApplicationEnv {
  port: number;
  stage: string;
  serverNumber: number;
}

export interface IDatabaseEnv {
  port: number;
  host: string;
  username: string;
  password: string;
  database: string;
  url: string;
}

const envConfig = () => ({
  application: {
    port: Number(process.env.PORT),
    stage: process.env.NODE_ENV,
    logDirectory: process.env.LOG_DIRECTORY,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Dvd],
    url: `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?schema=public`,
  },
});

export const envConfigOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [envConfig],
};

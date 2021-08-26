import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Credor } from './credores/credor.entity';
import { EnteDevedor } from './entes-devedores/ente-devedor.entity';
import { Pagamento } from './pagamentos/pagamento.entity';
dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : 'localhost',
  port: Number(process.env.DATABASE_PORT)
    ? Number(process.env.DATABASE_PORT)
    : 5432,
  username: process.env.DATABASE_USERNAME
    ? process.env.DATABASE_USERNAME
    : 'postgres',
  password: process.env.DATABASE_PASSWORD
    ? process.env.DATABASE_PASSWORD
    : 'postgres',
  database: process.env.DATABASE_DATABASE
    ? process.env.DATABASE_DATABASE
    : 'desafioprecato',
  synchronize: false,
  migrationsRun: process.env.DATABASE_MIGRATIONS_RUN
    ? JSON.parse(process.env.DATABASE_MIGRATIONS_RUN)
    : true,

  entities: [Credor, EnteDevedor, Pagamento],
  migrations: [ `${__dirname}/migrations/*{.ts,.js}`,],
  keepConnectionAlive: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export = config;
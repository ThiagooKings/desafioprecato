import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { CredorModule } from './credores/credores.module';
import { EnteDevedorModule } from './entes-devedores/entes-devedores.module';
import * as ormconfig from './ormconfig';
import { PagamentoModule } from './pagamentos/pagamentos.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async()=>ormconfig
    }),
  CredorModule, EnteDevedorModule, PagamentoModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

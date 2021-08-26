import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredoresController } from './credores.controller';
import { Credor } from './credor.entity';
import { CredorService } from './shared/credor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Credor])],
  providers: [CredorService],
  controllers: [CredoresController],
})
export class CredorModule {}

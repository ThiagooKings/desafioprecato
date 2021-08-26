import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnteDevedor } from './ente-devedor.entity';
import { EntesDevedoresController } from './entes-devedores.controller';
import { EnteDevedorService } from './shared/ente-devedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EnteDevedor])],
  providers: [EnteDevedorService],
  controllers: [EntesDevedoresController],
})
export class EnteDevedorModule {}

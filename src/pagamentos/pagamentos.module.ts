import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credor } from '../credores/credor.entity';
import { Pagamento } from './pagamento.entity';
import { PagamentosController } from './pagamentos.controller';
import { PagamentoService } from './shared/pagamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento, Credor])],
  providers: [PagamentoService],
  controllers: [PagamentosController],
})
export class PagamentoModule {}

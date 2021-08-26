import {
  Body,
  Controller, Get, Param,
  Post
} from '@nestjs/common';
import { CreatePagamentoDto } from './dto/createPagamento.dto';
import { Pagamento } from './pagamento.entity';
import { PagamentoService } from './shared/pagamento.service';

@Controller('pagamentos')
  export class PagamentosController {
    constructor(private readonly service: PagamentoService) {}
  
    @Get()
    async getAll():Promise<Pagamento[]> {
      return await this.service.getAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: string):Promise<Pagamento> {
      return await this.service.getById(id);
    }
  
    @Post()
    async create(@Body() pagamento: CreatePagamentoDto):Promise<Pagamento> {
      return await this.service.create(pagamento);
    }
  
  }
  
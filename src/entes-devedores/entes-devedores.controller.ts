import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { CreateEnteDevedorDto } from './dto/createEnteDevedor.dto';
import { UpdateEnteDevedorDto } from './dto/updateEnteDevedor.dto';
import { EnteDevedor } from './ente-devedor.entity';
import { EnteDevedorService } from './shared/ente-devedor.service';
  
  @Controller('entes-devedores')
  export class EntesDevedoresController {
    constructor(private readonly service: EnteDevedorService) {}
  
    @Get()
    async getAll():Promise<EnteDevedor[]> {
      return await this.service.getAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: string):Promise<EnteDevedor> {
      return await this.service.getById(id);
    }
  
    @Post()
    async create(@Body() enteDevedor: CreateEnteDevedorDto):Promise<EnteDevedor> {
      return await this.service.create(enteDevedor);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() enteDevedor: UpdateEnteDevedorDto): Promise<EnteDevedor> {
      return await this.service.update(id, enteDevedor);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.service.delete(id);
    }
  }
  
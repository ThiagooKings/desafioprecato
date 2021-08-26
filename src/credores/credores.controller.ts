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
import { Credor } from './credor.entity';
import { CreateCredorDto } from './dto/createCredor.dto';
import { UpdateCredorDto } from './dto/updateCredor.dto';
import { CredorService } from './shared/credor.service';
  
  @Controller('credores')
  export class CredoresController {
    constructor(private readonly service: CredorService) {}
  
    @Get()
    async getAll():Promise<Credor[]> {
      return await this.service.getAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: string):Promise<Credor> {
      return await this.service.getById(id);
    }
  
    @Post()
    async create(@Body() credor: CreateCredorDto):Promise<Credor> {
      return await this.service.create(credor);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() credor: UpdateCredorDto): Promise<Credor> {
      return await this.service.update(id, credor);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string): Promise<void> {
      return await this.service.delete(id);
    }
  }
  
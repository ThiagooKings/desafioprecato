import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnteDevedorDto } from '../dto/createEnteDevedor.dto';
import { UpdateEnteDevedorDto } from '../dto/updateEnteDevedor.dto';
import { EnteDevedor } from '../ente-devedor.entity';

@Injectable()
export class EnteDevedorService {
  constructor(
    @InjectRepository(EnteDevedor) private readonly repository: Repository<EnteDevedor>,
  ) {}

  async getAll():Promise<EnteDevedor[]> { // retorna todos os entes devedores cadastrados no banco de dados
    return await this.repository.find();
  }

  async getById(id: string): Promise<EnteDevedor> { // retorna um ente devedor por meio do id buscado na requisição
    const enteDevedor = await this.repository.findOne(id);
    if (!enteDevedor) {
      throw new NotFoundException('Ente devedor não encontrado!');
    }
    return enteDevedor;
  }

  async create(enteDevedor: CreateEnteDevedorDto): Promise<EnteDevedor> { // cria um ente devedor
    return await this.repository.save(enteDevedor);
     
    
  }

  async update(id: string, enteDevedor: UpdateEnteDevedorDto): Promise<EnteDevedor> { // altera um ente devedor previamente cadastrado
    const enteDevedorBusca = await this.getById(id);
    enteDevedorBusca.nomeEnteDevedor = enteDevedor.nomeEnteDevedor ? enteDevedor.nomeEnteDevedor : enteDevedorBusca.nomeEnteDevedor;
    enteDevedorBusca.cnpjEnteDevedor = enteDevedor.cnpjEnteDevedor ? enteDevedor.cnpjEnteDevedor : enteDevedorBusca.cnpjEnteDevedor;
    return await this.repository.save(enteDevedorBusca);
    
  }

  async delete(id: string): Promise<void> { // deleta um ente devedor por meio de se id
    await this.getById(id); 
    await this.repository.delete(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credor } from '../credor.entity';
import { CreateCredorDto } from '../dto/createCredor.dto';
import { UpdateCredorDto } from '../dto/updateCredor.dto';

@Injectable()
export class CredorService {
  constructor(
    @InjectRepository(Credor) private readonly repository: Repository<Credor>,
  ) {}

  async getAll():Promise<Credor[]> { // retorna todos os credores cadastrados
    return await this.repository.find();
  }

  async getById(id: string): Promise<Credor> { // retorna um credor pelo id passado pela requisição
    const credor = await this.repository.findOne(id);
    if (!credor) {
      throw new NotFoundException('Credor não encontrado!');
    }
    return credor;
  }

  async create(credor: CreateCredorDto): Promise<Credor> { // cria um credor
    return await this.repository.save(credor);
     
    
  }

  async update(id: string, credor: UpdateCredorDto): Promise<Credor> { // altera um credor já cadastrado no banco de dados
    const credorBusca = await this.getById(id);
    credorBusca.cpfCredor = credor.cpfCredor ? credor.cpfCredor : credorBusca.cpfCredor;
    credorBusca.nomeCredor = credor.nomeCredor ? credor.nomeCredor : credorBusca.nomeCredor;
    credorBusca.statusCadastro = credor.statusCadastro ? credor.statusCadastro : credorBusca.statusCadastro;
    return await this.repository.save(credorBusca);
    
  }

  async delete(id: string): Promise<void> { // deleta um credor por meio de seu id
    await this.getById(id); 
    await this.repository.delete(id);
  }
}

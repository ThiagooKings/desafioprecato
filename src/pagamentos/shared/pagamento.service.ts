import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Credor } from '../../credores/credor.entity';
import { CreatePagamentoDto } from '../dto/createPagamento.dto';
import { Pagamento } from '../pagamento.entity';

@Injectable()
export class PagamentoService {
  constructor(
    @InjectRepository(Pagamento) private readonly repository: Repository<Pagamento>, 
    @InjectRepository(Credor) private readonly credorRepository: Repository<Credor>,
  ) {}

  async getAll():Promise<Pagamento[]> { //função que retorna todos os pagamentos cadastrados
    return await this.repository.find();
  }

  async getById(id: string): Promise<Pagamento> { //função que retorna o pagamento relacionado ao id recebido pela requisição 
    const pagamento = await this.repository.findOne(id);
    if (!pagamento) 
    {
      throw new NotFoundException('Pagamento não encontrado!');
    }
    return pagamento;
  }

  async create(pagamento: CreatePagamentoDto): Promise<Pagamento> { // criação de um pagamento

    if(pagamento.valorFinal<=0 || pagamento.valorInicial<=0)
    {
      const pagamentoCriado = this.repository.create({ // cria um pagamento com motivo e statusRemessa, que não são passados na requisição
        ...pagamento, statusRemessa: 'Pagamento reprovado!', 
        motivo: 'Valor final ou valor inicial menores ou igual a zero!'
      })
      
      await this.repository.save({ // salva o pagamento banco de dados
        ...pagamentoCriado, credor:{idCredor: pagamento.idCredor},
          enteDevedor: {idEnteDevedor: pagamento.idEnteDevedor}
      });

      throw new BadRequestException('Pagamento reprovado!, valor final ou valor inicial menores ou igual a zero!');
    }
    
    if(pagamento.valorFinal > pagamento.valorInicial)
    {
      const pagamentoCriado = this.repository.create({
        ...pagamento, statusRemessa: 'Pagamento reprovado!', 
        motivo: 'Valor final maior que valor inicial'
      })

      await this.repository.save({ 
        ...pagamentoCriado, credor:{idCredor: pagamento.idCredor},
          enteDevedor: {idEnteDevedor: pagamento.idEnteDevedor}
      });

      throw new BadRequestException('Pagamento reprovado!, valor final maior que o valor inicial!');
    }

    const credor = await this.credorRepository.findOne(pagamento.idCredor)
    if (credor.statusCadastro !== 'aprovado')
    {
      const pagamentoCriado = this.repository.create({
        ...pagamento, statusRemessa: 'Pagamento reprovado!', 
        motivo: 'Status de cadastro do credor não está aprovado!'
      })

      await this.repository.save({
        ...pagamentoCriado, credor:{idCredor: pagamento.idCredor},
            enteDevedor: {idEnteDevedor: pagamento.idEnteDevedor}
      });

      throw new BadRequestException('Pagamento reprovado!, status de cadastro do credor não está aprovado!');

    }
    const pagamentoCriado = this.repository.create({
      ...pagamento, statusRemessa: 'Pagamento aprovado!' 
    })
    
    return await this.repository.save({
      ...pagamentoCriado, credor:{idCredor: pagamento.idCredor},
        enteDevedor: {idEnteDevedor: pagamento.idEnteDevedor}
    });
  }
}

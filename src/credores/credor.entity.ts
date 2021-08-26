import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Credor {
  @PrimaryGeneratedColumn('uuid', {name: 'id_credor'})
  idCredor: string;

  @Column({name: 'nome_credor'})
  nomeCredor: string;

  @Column({name:'cpf_credor', unique: true})
  cpfCredor: string;

  @Column({name:'status_cadastro'})
  statusCadastro: string;

}

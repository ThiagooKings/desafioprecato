import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EnteDevedor {
  @PrimaryGeneratedColumn('uuid', {name: 'id_entedevedor'})
  idEnteDevedor: string;

  @Column({name: 'nome_entedevedor'})
  nomeEnteDevedor: string;

  @Column({name:'cnpj_entedevedor', unique: true})
  cnpjEnteDevedor: string;

}

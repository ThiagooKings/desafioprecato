import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Credor } from '../credores/credor.entity';
import { EnteDevedor } from '../entes-devedores/ente-devedor.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn('uuid', {name: 'id_pagamento'})
  idPagamento: string;

  @Column({name: 'valor_inicial'})
  valorInicial: number;

  @Column({name:'valor_final'})
  valorFinal: number;

  @Column({name:'status_remessa'})
  statusRemessa: string;

  @Column({name: 'motivo', nullable: true})
  motivo?: string;

  @CreateDateColumn({type: 'timestamp', name: 'data_pagamento', default: ()=> 'LOCALTIMESTAMP'})
  data: string;

  @OneToOne(()=>Credor)
  @JoinColumn({name: 'id_credor'})
  credor: Credor;

  @OneToOne(()=>EnteDevedor)
  @JoinColumn({name: 'id_ente-devedor'})
  enteDevedor: EnteDevedor;


}
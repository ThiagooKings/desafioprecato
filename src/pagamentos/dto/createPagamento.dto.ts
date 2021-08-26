import { IsNumber, IsUUID } from 'class-validator';

export class CreatePagamentoDto{
  
  @IsUUID()
  idCredor: string;
  
  @IsUUID()
  idEnteDevedor: string;

  @IsNumber()
  valorInicial: number;

  @IsNumber()
  valorFinal: number;

  
}
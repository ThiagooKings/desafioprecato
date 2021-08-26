import { IsString } from 'class-validator';

export class CreateCredorDto{
  
  @IsString()
  nomeCredor: string;
  
  @IsString()
  cpfCredor: string;

  @IsString()
  statusCadastro: string;
}
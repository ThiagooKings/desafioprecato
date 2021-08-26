import { IsString } from 'class-validator';

export class CreateEnteDevedorDto{
  
  @IsString()
  nomeEnteDevedor: string;
  
  @IsString()
  cnpjEnteDevedor: string;
  
}
import { IsOptional, IsString } from 'class-validator';

export class UpdateEnteDevedorDto{
  
  @IsString()
  @IsOptional()
  nomeEnteDevedor?: string;
  
  @IsString()
  @IsOptional()
  cnpjEnteDevedor?: string;

}
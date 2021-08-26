import { IsOptional, IsString } from 'class-validator';

export class UpdateCredorDto{
  
  @IsString()
  @IsOptional()
  nomeCredor?: string;
  
  @IsString()
  @IsOptional()
  cpfCredor?: string;

  @IsString()
  @IsOptional()
  statusCadastro?: string;
}
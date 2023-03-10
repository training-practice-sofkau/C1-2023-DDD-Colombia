import { IsString } from 'class-validator';
import { IRegistrarUnUsuarioCommand } from '../../../domain/interfaces';

export class RegistrarUnUsuarioCommand implements IRegistrarUnUsuarioCommand {
  @IsString({ message: 'El email es obligatorio' })
  email: string;

  @IsString({ message: 'La contraseña es obligatoria' })
  password: string;

  @IsString({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsString({ message: 'El apellido es obligatorio' })
  apellido: string;
}

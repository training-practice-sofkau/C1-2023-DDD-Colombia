import { UsuarioDomainEntity } from '../entities/usuario.domain-entity';

export interface ITelefonoDomainService {
  getTelefono(telefonoId: string): Promise<UsuarioDomainEntity>;
}

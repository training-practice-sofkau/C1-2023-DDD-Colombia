import { NombreValueObject } from '../../value-objects/usuario/nombre/nombre.value-object';
import { UserIdValueObject } from '../../value-objects/usuario/usuario-id/usuario-id.value-object';
import { IUsuarioDomainEntity } from './usuario.domain-entity.interface';

export interface ITeléfonoDomainEntity {
  teléfonoId?: string | UserIdValueObject;
  teléfono?: string | NombreValueObject;
  usuario?: IUsuarioDomainEntity;
}

import { NombreValueObject } from '../../value-objects/usuario/nombre/nombre.value-object';
import { UserIdValueObject } from '../../value-objects/usuario/usuario-id/usuario-id.value-object';
import { ITeléfonoDomainEntity } from './telefono.domain-entity.interface';

export interface IUsuarioDomainEntity {
  userId?: string | UserIdValueObject;
  nombre?: string | NombreValueObject;
  telefonos?: ITeléfonoDomainEntity[];
}

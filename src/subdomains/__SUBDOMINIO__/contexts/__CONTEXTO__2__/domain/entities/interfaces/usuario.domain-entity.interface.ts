import { NombreValueObject } from '../../value-objects/usuario/nombre/nombre.value-object';
import { UserIdValueObject } from '../../value-objects/usuario/usuario-id/usuario-id.value-object';

export interface IUsuarioDomainEntity {
  userId?: string | UserIdValueObject;
  nombre?: string | NombreValueObject;
}

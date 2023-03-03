import { NombreValueObject } from '../value-objects/usuario/nombre/nombre.value-object';
import { UserIdValueObject } from '../value-objects/usuario/usuario-id/usuario-id.value-object';
import { IUsuarioDomainEntity } from './interfaces/usuario.domain-entity.interface';

export class UsuarioDomainEntity implements IUsuarioDomainEntity {
  userId?: string | UserIdValueObject;
  nombre?: string | NombreValueObject;

  constructor(data?: IUsuarioDomainEntity) {
    if (data?.userId) this.userId = data.userId;
    if (data?.nombre) this.nombre = data.nombre;
  }
}

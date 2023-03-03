import { NombreValueObject } from '../value-objects/usuario/nombre/nombre.value-object';
import { UserIdValueObject } from '../value-objects/usuario/usuario-id/usuario-id.value-object';
import { IUsuarioDomainEntity } from './interfaces/usuario.domain-entity.interface';

/**
 * Entidad de dominio para el Usuario
 *
 * @export
 * @class UsuarioDomainEntity
 * @implements {IUsuarioDomainEntity}
 */
export class UsuarioDomainEntity implements IUsuarioDomainEntity {
  /**
   * Identificador del usuario
   *
   * @type {(string | UserIdValueObject)}
   * @memberof UsuarioDomainEntity
   */
  userId?: string | UserIdValueObject;

  /**
   * Nombre del usuario
   *
   * @type {(string | NombreValueObject)}
   * @memberof UsuarioDomainEntity
   */
  nombre?: string | NombreValueObject;

  /**
   * Crea una instancia de UsuarioDomainEntity
   *
   * @param {IUsuarioDomainEntity} [data] Datos para inicializar la entidad
   * @memberof UsuarioDomainEntity
   */
  constructor(data?: IUsuarioDomainEntity) {
    if (data?.userId) this.userId = data.userId;
    if (data?.nombre) this.nombre = data.nombre;
  }
}

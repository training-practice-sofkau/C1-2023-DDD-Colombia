import {
  ApellidoValueObject,
  InformacionPersonalIdValueObject,
  NombreValueObject,
} from '../value-objects/informacion-personal';
import {
  IInformacionPersonalDomainEntity,
  IUsuarioDomainEntity,
} from './interfaces';

export class InformacionPersonalDomainEntityBase
  implements IInformacionPersonalDomainEntity
{
  informacionPersonalId?: string | InformacionPersonalIdValueObject;
  nombre?: string | NombreValueObject;
  apellido?: string | ApellidoValueObject;
  usuario?: IUsuarioDomainEntity;

  constructor(informacionPersonal?: IInformacionPersonalDomainEntity) {
    if (informacionPersonal?.informacionPersonalId)
      this.informacionPersonalId = informacionPersonal.informacionPersonalId;
    if (informacionPersonal?.nombre) this.nombre = informacionPersonal.nombre;
    if (informacionPersonal?.apellido)
      this.apellido = informacionPersonal.apellido;
    if (informacionPersonal?.usuario)
      this.usuario = informacionPersonal.usuario;
  }
}

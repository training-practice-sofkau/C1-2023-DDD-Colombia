import { IUsuarioDomainEntity } from '.';
import {
  ApellidoValueObject,
  InformacionPersonalIdValueObject,
  NombreValueObject,
} from '../../value-objects/informacion-personal';

export interface IInformacionPersonalDomainEntity {
  informacionPersonalId?: string | InformacionPersonalIdValueObject;
  nombre?: string | NombreValueObject;
  apellido?: string | ApellidoValueObject;
  usuario?: IUsuarioDomainEntity;
}

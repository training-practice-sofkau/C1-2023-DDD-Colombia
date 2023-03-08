import { IInformacionPersonalDomainEntity } from '.';
import {
  EmailValueObject,
  PasswordValueObject,
  UsuarioIdValueObject,
} from '../../value-objects/usuario';

export interface IUsuarioDomainEntity {
  usuarioId?: string | UsuarioIdValueObject;
  email?: string | EmailValueObject;
  password?: string | PasswordValueObject;
  informacionPersonal?: IInformacionPersonalDomainEntity;
}

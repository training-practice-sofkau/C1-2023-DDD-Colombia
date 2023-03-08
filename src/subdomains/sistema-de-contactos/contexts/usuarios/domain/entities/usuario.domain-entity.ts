import { InformacionPersonalDomainEntityBase } from '.';
import {
  EmailValueObject,
  PasswordValueObject,
  UsuarioIdValueObject,
} from '../value-objects/usuario';
import { IUsuarioDomainEntity } from './interfaces';

export class UsuarioDomainEntityBase implements IUsuarioDomainEntity {
  usuarioId?: string | UsuarioIdValueObject;
  email?: string | EmailValueObject;
  password?: string | PasswordValueObject;
  informacionPersonal?: InformacionPersonalDomainEntityBase;

  constructor(usuario?: IUsuarioDomainEntity) {
    if (usuario?.usuarioId) this.usuarioId = usuario.usuarioId;
    if (usuario?.email) this.email = usuario.email;
    if (usuario?.password) this.password = usuario.password;
    if (usuario?.informacionPersonal)
      this.informacionPersonal = usuario.informacionPersonal;
  }
}

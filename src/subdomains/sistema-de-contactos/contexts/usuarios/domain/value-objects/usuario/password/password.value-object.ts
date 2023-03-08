import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsEmpty, IsPassword } from '@validations';
import { createHash } from 'node:crypto';

export class PasswordValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateIsEmpty();
    this.validateStructure();
  }

  valueOf(): string {
    return createHash('sha512').update(this.value).digest('hex');
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'password',
        message: 'El "password" no puede estar vacío',
      } as IErrorValueObject);
    }
  }

  private validateStructure(): void {
    if (this.value && IsPassword(this.value) === false) {
      this.setError({
        field: 'password',
        message:
          'El "password" no tiene el formato válido. (Mínimo 8 caracteres, ' +
          'al menos una letra mayúscula, una letra minúscula, un número y ' +
          'un carácter especial',
      } as IErrorValueObject);
    }
  }
}

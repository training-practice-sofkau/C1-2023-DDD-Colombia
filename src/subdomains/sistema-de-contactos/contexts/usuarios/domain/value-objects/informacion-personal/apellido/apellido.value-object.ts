import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsEmpty, StringMaxLength } from '@validations';

export class ApellidoValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateIsEmpty();
    this.validateLength();
  }

  private validateIsEmpty(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'apellido',
        message: 'El "apellido" no puede estar vacío',
      } as IErrorValueObject);
    }
  }

  private validateLength(): void {
    if (this.value && StringMaxLength(this.value, 100) === true) {
      this.setError({
        field: 'apellido',
        message: 'El "apellido" no puede tener más de 100 caracteres',
      } as IErrorValueObject);
    }
  }
}

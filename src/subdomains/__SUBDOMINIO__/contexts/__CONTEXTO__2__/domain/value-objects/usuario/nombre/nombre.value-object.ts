import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { IsEmpty } from 'src/shared/validations/is-empty.validation';
import { StringMaxLength } from 'src/shared/validations/string-max-length.validation';

export class NombreValueObject extends ValueObjectBase<string> {
  validateData(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'nombre',
        message: 'El "nombre" no puede estar vacío',
      } as IErrorValueObject);
    } else if (this.value && StringMaxLength(this.value, 10) === true) {
      this.setError({
        field: 'nombre',
        message: 'El valor de "nombre" no puede ser mayor a 10 caracteres',
      } as IErrorValueObject);
    }
  }
}

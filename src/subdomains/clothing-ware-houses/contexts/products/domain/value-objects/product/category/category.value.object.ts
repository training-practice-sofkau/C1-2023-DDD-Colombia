import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { StringMaxLength } from 'src/shared/validations/string-max-length.validation';

export class CategoryValueObject extends ValueObjectBase<string> {
  validateData(): void {
    if (this.value && StringMaxLength(this.value, 15) === true) {
      this.setError({
        field: 'categoria',
        message: 'El valor de "categoria" no puede ser mayor a 15 caracteres',
      } as IErrorValueObject);
    }
  }
}

import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { StringMaxLength } from 'src/shared/validations/string-max-length.validation';

export class DescriptionValueObject extends ValueObjectBase<string> {
  validateData(): void {
    if (this.value && StringMaxLength(this.value, 50) === true) {
      this.setError({
        field: 'descripcion',
        message:
          'El valor de "descripcion" no puede ser mayor a 200 caracteres',
      } as IErrorValueObject);
    }
  }
}

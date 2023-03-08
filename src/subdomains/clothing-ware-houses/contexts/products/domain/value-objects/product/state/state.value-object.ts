import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { ContentDiferentBoolean } from 'src/shared/validations/content-diferent-boolean.validation';
import { IsEmpty } from 'src/shared/validations/is-empty-validation';

export class StateValueObject extends ValueObjectBase<boolean> {
  constructor(value?: boolean) {
    super(value ? value : true);
  }

  validateData(): void {
    if (IsEmpty(this.value) === true) {
      this.setError({
        field: 'estado',
        message: 'El "estado" no puede estar vacío',
      } as IErrorValueObject);
    } else if (ContentDiferentBoolean(this.value)) {
      this.setError({
        field: 'estado',
        message: 'El "estado" debe ser true o false ',
      } as IErrorValueObject);
    }
  }
}

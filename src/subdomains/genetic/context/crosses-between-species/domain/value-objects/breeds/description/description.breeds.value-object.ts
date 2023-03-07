import { IErrorValueObject } from 'src/shared/sofka';
import { description } from 'src/shared/validations/validator-description.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
export class DescriptionValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.ValidationDescription();
  }

  private ValidationDescription() {
    if (!description(this.value)) {
      this.setError({
        field: 'description',
        message: 'La descripcion "description" no es valido',
      } as IErrorValueObject);
    }
  }
}

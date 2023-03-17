import { IErrorValueObject } from 'src/shared/sofka';
import { Description } from 'src/shared/validations/description.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
export class DescriptionValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.ValidationDescriptionBreed();
  }

  private ValidationDescriptionBreed() {
    if (!Description(this.value)) {
      this.setError({
        field: 'description',
        message: 'La descripcion "description" no es valido',
      } as IErrorValueObject);
    }
  }
}

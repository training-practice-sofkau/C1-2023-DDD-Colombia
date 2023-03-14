import { DescriptionTypeFeeding } from '../../../../../../../../shared/validations/description.type-feeding.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class TypeFeedingValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.DescriptionTypeFeeding();
  }

  private DescriptionTypeFeeding() {
    if (!DescriptionTypeFeeding(this.value)) {
      this.setError({
        field: 'descriptionTypeFeeding',
        message:
          'La descripcion "descriptionTypeFeeding" del tipo de la comida no es valido',
      } as IErrorValueObject);
    }
  }
}

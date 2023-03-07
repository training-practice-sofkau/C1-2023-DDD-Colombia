import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { foodPermitted } from 'src/shared/validations/validation-food-permitted.validator';
export class TypefoodPermitted extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.foodPermitted();
  }

  private foodPermitted() {
    if (!foodPermitted(this.value)) {
      this.setError({
        field: 'foodPermitted',
        message: 'El tipo  "foodPermitted" de comida no es permitido',
      } as IErrorValueObject);
    }
  }
}

import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { FoodPermitted } from 'src/shared/validations/food-permitted.validator';
export class TypefoodPermittedValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.FoodPermittedFeeding();
  }

  private FoodPermittedFeeding() {
    if (!FoodPermitted(this.value)) {
      this.setError({
        field: 'foodPermittedFeeding',
        message: 'El tipo  "foodPermittedFeeding" de comida no es permitido',
      } as IErrorValueObject);
    }
  }
}

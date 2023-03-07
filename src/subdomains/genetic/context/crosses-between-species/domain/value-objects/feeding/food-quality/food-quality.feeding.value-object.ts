import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { foodQuality } from 'src/shared/validations/validation-food-quality.validator';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class FoodQualityValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }

  validateData(): void {
    this.FoodQuality();
  }
  private FoodQuality() {
    if (!foodQuality(this.value)) {
      this.setError({
        field: 'foodQuality',
        message: 'La calidad "foodQuality" de la comida no admitida',
      } as IErrorValueObject);
    }
  }
}

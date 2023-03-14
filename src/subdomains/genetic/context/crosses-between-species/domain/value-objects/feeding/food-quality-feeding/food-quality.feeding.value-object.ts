import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { FoodQuality } from 'src/shared/validations/food-quality.validator';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class FoodQualityValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }

  validateData(): void {
    this.FoodQualityFeeding();
  }
  private FoodQualityFeeding() {
    if (!FoodQuality(this.value)) {
      this.setError({
        field: 'FoodQualityFeeding',
        message: 'La calidad "FoodQualityFeeding" de la comida no admitida',
      } as IErrorValueObject);
    }
  }
}

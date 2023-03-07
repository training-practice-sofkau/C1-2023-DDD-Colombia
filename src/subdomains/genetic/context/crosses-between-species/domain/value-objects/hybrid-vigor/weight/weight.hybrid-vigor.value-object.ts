import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { weight } from '../../../../../../../../shared/validations/validation-weight.validator';
export class StrongerWeight extends ValueObjectBase<number> {
  constructor(value?: number) {
    super(value);
  }

  validateData(): void {
    this.ValidationAverageWeight();
  }

  private ValidationAverageWeight() {
    if (!weight(this.value)) {
      this.setError({
        field: 'weight',
        message: 'La fuerza "weight" hibrida no es acta para el cruce genetico',
      } as IErrorValueObject);
    }
  }
}

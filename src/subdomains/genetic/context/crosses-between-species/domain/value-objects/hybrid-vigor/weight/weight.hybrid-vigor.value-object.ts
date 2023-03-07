import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { weigth } from 'src/shared/validations/validation-weigth.validator';
export class StrongerWeigthValueObject extends ValueObjectBase<number> {
  constructor(value?: number) {
    super(value);
  }

  validateData(): void {
    this.ValidationAverageWeight();
  }

  private ValidationAverageWeight() {
    if (!weigth(this.value)) {
      this.setError({
        field: 'weigth',
        message: 'La fuerza "weigth" hibrida no es acta para el cruce genetico',
      } as IErrorValueObject);
    }
  }
}

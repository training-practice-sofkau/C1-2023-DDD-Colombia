import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { Age } from 'src/shared/validations/age.hybrid-vigor.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
export class AgeValueObject extends ValueObjectBase<number> {
  constructor(value?: number) {
    super(value);
  }

  validateData(): void {
    this.ValidationAverangeAge();
  }

  private ValidationAverangeAge() {
    if (!Age(this.value)) {
      this.setError({
        field: 'age',
        message: 'La edad "age" del Bovino no es acta',
      } as IErrorValueObject);
    }
  }
}

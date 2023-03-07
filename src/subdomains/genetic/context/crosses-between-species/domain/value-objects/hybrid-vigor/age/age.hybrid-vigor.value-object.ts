import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
import { age } from 'src/shared/validations/validation-age.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
export class Age extends ValueObjectBase<number> {
  constructor(value?: number) {
    super(value);
  }

  validateData(): void {
    this.ValidationAverangeAge();
  }

  private ValidationAverangeAge() {
    if (!age(this.value)) {
      this.setError({
        field: 'age',
        message: 'La edad "age" del Bovino no es acta',
      } as IErrorValueObject);
    }
  }
}

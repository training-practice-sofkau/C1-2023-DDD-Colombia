import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { breeds } from '../../../../../../../../shared/validations/validation-type-breed.validator';

export class BreedTypeValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.ValidationBreedType();
  }
  private ValidationBreedType() {
    if (!breeds(this.value)) {
      this.setError({
        field: 'breedType',
        message: 'El tipo "breedType" de raza no es valido',
      } as IErrorValueObject);
    }
  }
}

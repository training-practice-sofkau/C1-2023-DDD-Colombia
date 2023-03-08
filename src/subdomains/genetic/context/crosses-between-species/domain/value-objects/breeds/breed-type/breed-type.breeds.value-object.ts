import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { Breeds } from '../../../../../../../../shared/validations/type-breed.validator';

export class BreedTypeValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    if (this.value) {
      this.ValidationBreedType();
    }
  }
  private ValidationBreedType() {
    if (!Breeds(this.value)) {
      this.setError({
        field: 'breedType',
        message: 'aqui  "breedType" de raza no es valido',
      } as IErrorValueObject);
    }
  }
}
console.log(new BreedTypeValueObject('bomi'));

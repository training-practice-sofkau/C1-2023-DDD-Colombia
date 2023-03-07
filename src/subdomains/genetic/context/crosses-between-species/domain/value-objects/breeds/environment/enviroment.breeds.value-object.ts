import { enviroment } from '../../../../../../../../shared/validations/validation-enviroment.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class Enviroment extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.ValidationTypeEnviroment();
  }
  private ValidationTypeEnviroment() {
    if (!enviroment(this.value)) {
      this.setError({
        field: 'enviroment',
        message: 'El tipo "enviroment" no es acto para el bovino',
      } as IErrorValueObject);
    }
  }
}

import { Enviroment } from '../../../../../../../../shared/validations/enviroment.validator';
import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { IErrorValueObject } from 'src/shared/sofka/interface/error-object-value.interface';
export class EnviromentValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value);
  }
  validateData(): void {
    this.ValidationTypeEnviromentBreed();
  }
  private ValidationTypeEnviromentBreed() {
    if (!Enviroment(this.value)) {
      this.setError({
        field: 'enviroment',
        message: 'El tipo "enviroment" no es acto para el bovino',
      } as IErrorValueObject);
    }
  }
}

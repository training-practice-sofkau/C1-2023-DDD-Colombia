import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { WrongDateFormat } from 'src/shared/validations/date.validation';

export class DateValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (WrongDateFormat(this.value)) {
      this.setError({
        field: 'fecha',
        message: 'la "fecha" es invalida',
      } as IErrorValueObject);
    }
  }
}

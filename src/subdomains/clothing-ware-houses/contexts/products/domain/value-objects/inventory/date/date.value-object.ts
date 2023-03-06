import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
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

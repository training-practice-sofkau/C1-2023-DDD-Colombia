import { IErrorValueObject, ValueObjectBase } from 'src/shared/sofka';
import { ContentDiferentReferenceNumber } from 'src/shared/validations/content-diferent-reference-number.validation';
import { StringMaxLength } from 'src/shared/validations/string-max-length.validation';

export class ReferenceNumberValueObject extends ValueObjectBase<string> {
  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (StringMaxLength(this.value, 7)) {
      this.setError({
        field: 'numero de referencia',
        message:
          'La cantidad de caracteres de "numero de referencia" de ser igual a 7',
      } as IErrorValueObject);
    } else if (ContentDiferentReferenceNumber(this.value)) {
      this.setError({
        field: 'numero de referencia',
        message: 'El "numero de referencia" no es valido',
      } as IErrorValueObject);
    }
  }
}

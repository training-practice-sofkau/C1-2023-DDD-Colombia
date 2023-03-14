import { ValueObjectBase, IErrorValueObject } from 'src/shared/sofka';
import { IsUUID4 } from 'src/shared/validations/breed-Id.validator';
import { uuid } from 'uuidv4';

export class Feeding extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value ? value : uuid());
  }

  validateData(): void {
    this.ValidateId();
  }

  private ValidateId(): void {
    if (this.value && IsUUID4(this.value) === false) {
      this.setError({
        field: 'validateId',
        message: 'El "validateId" no tiene un formato válido',
      } as IErrorValueObject);
    }
  }
}

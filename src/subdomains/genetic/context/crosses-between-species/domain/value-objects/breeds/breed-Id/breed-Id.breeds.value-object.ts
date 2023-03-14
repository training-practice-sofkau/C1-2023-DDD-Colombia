import { ValueObjectBase } from '../../../../../../../../shared/sofka/bases/object-value.base';
import { v4 as uuid } from 'uuid';
import { IErrorValueObject } from 'src/shared/sofka';
import { IsUUID4 } from 'src/shared/validations/breed-Id.validator';

export class BreedId extends ValueObjectBase<string> {
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

import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsUUID4 } from '@validations';
import { v4 as uuid } from 'uuid';

export class InformacionPersonalIdValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value ? value : uuid());
  }

  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (this.value && IsUUID4(this.value) === false) {
      this.setError({
        field: 'informacionPersonalId',
        message: 'El "informacionPersonalId" no tiene un formato válido',
      } as IErrorValueObject);
    }
  }
}

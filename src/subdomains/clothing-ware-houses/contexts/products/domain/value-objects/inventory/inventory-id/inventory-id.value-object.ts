import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { IsUUID4 } from 'src/shared/validations/is-uuid-4.validation';
import { v4 as uuid } from 'uuid';

export class InventoryIdValueObject extends ValueObjectBase<string> {
  constructor(value?: string) {
    super(value ? value : uuid());
  }

  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (this.value && IsUUID4(this.value) === false) {
      this.setError({
        field: 'inventoryId',
        message: 'El "inventoryId" no tiene un formato válido',
      } as IErrorValueObject);
    }
  }
}

import { ValueObjectBase } from 'src/shared/sofka/bases';
import { IErrorValueObject } from 'src/shared/sofka/interface';
import { NumberGreaterThanZero } from 'src/shared/validations/greater-than-zero.validation';

export class PriceValueObject extends ValueObjectBase<number> {
  validateData(): void {
    this.validateStructure();
  }

  private validateStructure(): void {
    if (!NumberGreaterThanZero(this.value)) {
      this.setError({
        field: 'precio',
        message: 'El "precio" no puede ser menor ni igual a 0',
      } as IErrorValueObject);
    }
  }
}

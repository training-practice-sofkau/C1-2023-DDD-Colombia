import { AvailableQuantityValueObject } from '../../../value-objects/inventory/available-quantity/available-quantity.value-object';
import { DateValueObject } from '../../../value-objects/inventory/date/date.value-object';
import { InventoryIdValueObject } from '../../../value-objects/inventory/inventory-id/inventory-id.value-object';
import { MinimumQuantityRequiredValueObject } from '../../../value-objects/inventory/minimum-quantity-required/minimum-quantity-required.value-object.spec';

export interface IInventoryDomainEntity {
  inventoryId?: string | InventoryIdValueObject;
  availableQuantity?: number | AvailableQuantityValueObject;
  date?: string | DateValueObject;
  MinimumQuantityRequired?: number | MinimumQuantityRequiredValueObject;
}

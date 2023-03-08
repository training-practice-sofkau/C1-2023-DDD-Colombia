import { AvailableQuantityValueObject } from '../../value-objects/inventory/available-quantity/available-quantity.value-object';
import { DateValueObject } from '../../value-objects/inventory/date/date.value-object';
import { InventoryIdValueObject } from '../../value-objects/inventory/inventory-id/inventory-id.value-object';
import { MinimumQuantityRequiredValueObject } from '../../value-objects/inventory/minimum-quantity-required/minimum-quantity-required.value-object.spec';
import { IProductDomainEntity } from '../product/interfaces/product.domain-entity.interface';
import { IInventoryDomainEntity } from './interfaces/inventory.domain-entity.interface';

/**
 * Entidad de dominio para el inventario
 *
 * @export
 * @class InventoryDomainEntity
 * @implements {IInventoryDomainEntity}
 */
export class InventoryDomainEntity implements IInventoryDomainEntity {
  /**
   * Identificador del inventario
   *
   * @type {(string | UserIdValueObject)}
   * @memberof InventoryDomainEntity
   */
  inventoryId?: string | InventoryIdValueObject;

  /**
   * Cantidad disponible
   *
   * @type {(number | AvailableQuantityValueObject)}
   * @memberof InventoryDomainEntity
   */
  availableQuantity?: number | AvailableQuantityValueObject;

  /**
   * Fecha del inventario
   *
   * @type {(string | DateValueObject)}
   * @memberof InventoryDomainEntity
   */
  date?: string | DateValueObject;

  /**
   * Cantidad minima requerida
   *
   * @type {(string | MinimumQuantityRequiredValueObject)}
   * @memberof InventoryDomainEntity
   */
  minimumQuantityRequired?: number | MinimumQuantityRequiredValueObject;

  /**
   * product de un inventario
   *
   * @type {(string | MinimumQuantityRequiredValueObject)}
   * @memberof InventoryDomainEntity
   */
  product?: IProductDomainEntity;

  /**
   * Crea una instancia de InventoryDomainEntity
   *
   * @param {IInventoryDomainEntity} [data] Datos para inicializar la entidad
   * @memberof InventoryDomainEntity
   */
  constructor(data?: IInventoryDomainEntity) {
    if (data?.inventoryId) this.inventoryId = data.inventoryId;
    if (data?.availableQuantity)
      this.availableQuantity = data.availableQuantity;
    if (data?.date) this.date = data.date;
    if (data?.MinimumQuantityRequired)
      this.minimumQuantityRequired = data.MinimumQuantityRequired;
  }
}

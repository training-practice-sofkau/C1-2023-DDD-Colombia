import { InventoryDomainEntity } from '../entities/inventory/inventory.domain-entity';
export interface IInventoryDomainService<
  Entity extends InventoryDomainEntity = InventoryDomainEntity,
> {
  addInventory(inventory: Entity): Promise<Entity>;
  updateAvailableQuantity(
    inventoryId: string,
    availableQuantity: number,
  ): Promise<Entity>;
  updateMiniumQuantityRequired(
    inventoryId: string,
    miniumQuantityRequired: number,
  ): Promise<Entity>;
}

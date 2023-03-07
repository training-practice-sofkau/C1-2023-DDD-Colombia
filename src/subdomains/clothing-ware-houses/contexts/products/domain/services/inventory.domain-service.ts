import { InventoryDomainEntity } from '../entities/inventory/inventory.domain-entity';
export interface IInventoryDomainService<
  Entity extends InventoryDomainEntity = InventoryDomainEntity,
> {
  addInventory(): Promise<Entity>;
  updateAvailableQuantity(): Promise<Entity>;
  updateMiniumQuantityRequired(): Promise<Entity>;
  updateStateInv(): Promise<Entity>;
}

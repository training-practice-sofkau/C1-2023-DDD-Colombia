import { InventoryDomainEntity } from '../entities/inventory/inventory.domain-entity';
export interface IInventoryDomainService<Entity extends InventoryDomainEntity> {
  addInventory(): Promise<Entity>;
  updateAvailableQuantity(): Promise<Entity>;
  updateMiniumQuantityRequired(): Promise<Entity>;
  updateState(): Promise<Entity>;
}

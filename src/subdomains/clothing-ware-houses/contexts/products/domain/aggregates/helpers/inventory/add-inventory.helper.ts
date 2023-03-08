import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { InventoryDomainEntity } from '../../../entities/inventory/inventory.domain-entity';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { AddedInventoryEventPublisher } from '../../../events/publishers/inventory/added-inventory.event-publisher';
import { IInventoryDomainService } from '../../../services/inventory.domain-service';

export const AddInventoryHelper = async (
  inventory: InventoryDomainEntity,
  addedInventoryEventPublisher: AddedInventoryEventPublisher<ProductDomainEntity>,
  inventoryService: IInventoryDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!addedInventoryEventPublisher)
    throw new AggregateRootException(
      'El evento addedInventoryEventPublisher no está definido',
    );
  if (!inventoryService)
    throw new AggregateRootException(
      'El servicio inventoryService no está definido',
    );

  const respuesta = await inventoryService.addInventory(inventory);
  addedInventoryEventPublisher.response = respuesta;
  addedInventoryEventPublisher.publish();
  return respuesta;
};

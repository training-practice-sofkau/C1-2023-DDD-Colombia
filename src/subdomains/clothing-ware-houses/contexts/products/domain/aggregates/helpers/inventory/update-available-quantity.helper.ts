import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedAvailableQuantityEventPublisher } from '../../../events/publishers/inventory/update-available-quantity';
import { IInventoryDomainService } from '../../../services/inventory.domain-service';

export const UpdateAvailableQuantityHelper = async (
  inventoryId: string,
  availableQuantity: number,
  updatedAvailableQuantityEventPublisher: UpdatedAvailableQuantityEventPublisher<ProductDomainEntity>,
  inventoryService: IInventoryDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedAvailableQuantityEventPublisher)
    throw new AggregateRootException(
      'El evento updatedAvailableQuantityEventPublisher no está definido',
    );
  if (!inventoryService)
    throw new AggregateRootException(
      'El servicio inventoryService no está definido',
    );

  const respuesta = await inventoryService.updateAvailableQuantity(
    inventoryId,
    availableQuantity,
  );
  updatedAvailableQuantityEventPublisher.response = respuesta;
  updatedAvailableQuantityEventPublisher.publish();
  return respuesta;
};

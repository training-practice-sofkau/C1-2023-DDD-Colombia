import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedAvailableQuantityEventPublisher } from '../../../events/publishers/inventory/update-available-quantity';
import { IInventoryDomainService } from '../../../services/inventory.domain-service';

export const UpdateMiniumAvailableQuantityHelper = async (
  productId: string,
  miniumAvailableQuantity: number,
  updatedMiniumAvailableQuantityEventPublisher: UpdatedAvailableQuantityEventPublisher<ProductDomainEntity>,
  inventoryService: IInventoryDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedMiniumAvailableQuantityEventPublisher)
    throw new AggregateRootException(
      'El evento updatedMiniumAvailableQuantityEventPublisher no está definido',
    );
  if (!inventoryService)
    throw new AggregateRootException(
      'El servicio inventoryService no está definido',
    );

  const respuesta = await inventoryService.updateAvailableQuantity(
    productId,
    miniumAvailableQuantity,
  );
  updatedMiniumAvailableQuantityEventPublisher.response = respuesta;
  updatedMiniumAvailableQuantityEventPublisher.publish();
  return respuesta;
};

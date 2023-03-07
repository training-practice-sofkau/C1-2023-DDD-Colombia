import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedNameEventPublisher } from '../../../events/publishers/product/updated-name.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const UpdateNameHelper = async (
  productId: string,
  productName: string,
  updatedNameEventPublisher: UpdatedNameEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedNameEventPublisher)
    throw new AggregateRootException(
      'El evento updatedNameEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio productService no está definido',
    );

  const respuesta = await productService.updateName(productId, productName);
  updatedNameEventPublisher.response = respuesta;
  updatedNameEventPublisher.publish();
  return respuesta;
};

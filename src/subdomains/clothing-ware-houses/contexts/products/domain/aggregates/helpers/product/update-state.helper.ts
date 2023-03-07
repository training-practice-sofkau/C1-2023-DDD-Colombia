import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedStateEventPublisher } from '../../../events/publishers/product/updated-state.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const UpdateStateHelper = async (
  productId: string,
  productState: boolean,
  updatedStateEventPublisher: UpdatedStateEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedStateEventPublisher)
    throw new AggregateRootException(
      'El evento updatedStateEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio productService no está definido',
    );

  const respuesta = await productService.updateState(productId, productState);
  updatedStateEventPublisher.response = respuesta;
  updatedStateEventPublisher.publish();
  return respuesta;
};

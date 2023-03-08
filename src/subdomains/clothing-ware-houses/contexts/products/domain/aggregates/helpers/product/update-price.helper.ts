import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedPriceEventPublisher } from '../../../events/publishers/product/updated-price.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const UpdatePriceHelper = async (
  productId: string,
  productPrice: string,
  updatedPriceEventPublisher: UpdatedPriceEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedPriceEventPublisher)
    throw new AggregateRootException(
      'El evento updatedDescriptionEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio productService no está definido',
    );

  const respuesta = await productService.updatePrice(productId, productPrice);
  updatedPriceEventPublisher.response = respuesta;
  updatedPriceEventPublisher.publish();
  return respuesta;
};

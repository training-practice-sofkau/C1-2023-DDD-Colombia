import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { GotProductEventPublisher } from '../../../events/publishers/product/got-product.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const GetProductHelper = async (
  productId: string,
  gotProductEventPublisher: GotProductEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!gotProductEventPublisher)
    throw new AggregateRootException(
      'El evento gotProductEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio telefonoService no está definido',
    );

  const respuesta = await productService.getProduct(productId);
  gotProductEventPublisher.response = respuesta;
  gotProductEventPublisher.publish();
  return respuesta;
};

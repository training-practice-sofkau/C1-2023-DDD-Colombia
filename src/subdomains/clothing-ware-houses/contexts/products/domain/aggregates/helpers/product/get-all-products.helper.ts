import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { GotProductsEventPublisher } from '../../../events/publishers/product/got-products.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const GetAllProductsHelper = async (
  gotProductsEventPublisher: GotProductsEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity[]> => {
  if (!gotProductsEventPublisher)
    throw new AggregateRootException(
      'El evento gotProductsEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio telefonoService no está definido',
    );

  const respuesta = await productService.getAllProducts();
  gotProductsEventPublisher.response = respuesta;
  gotProductsEventPublisher.publish();
  return respuesta;
};

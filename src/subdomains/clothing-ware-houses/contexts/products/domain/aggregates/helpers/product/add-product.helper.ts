import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { AddedProductEventPublisher } from '../../../events/publishers/product/added-product.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const AddProductHelper = async (
  product: ProductDomainEntity,
  addedProductEventPublisher: AddedProductEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!addedProductEventPublisher)
    throw new AggregateRootException(
      'El evento addedProductEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio telefonoService no está definido',
    );

  const respuesta = await productService.addProduct(product);
  addedProductEventPublisher.response = respuesta;
  addedProductEventPublisher.publish();
  return respuesta;
};

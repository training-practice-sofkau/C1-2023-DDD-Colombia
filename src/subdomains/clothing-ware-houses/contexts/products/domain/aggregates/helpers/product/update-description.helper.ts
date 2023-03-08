import { AggregateRootException } from 'src/shared/sofka/exceptions';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';
import { UpdatedDescriptionEventPublisher } from '../../../events/publishers/product/updated-description.event-publisher';
import { IProductDomainService } from '../../../services/product.domain-service';

export const UpdateDescriptionHelper = async (
  productId: string,
  productDescription: string,
  updatedDescriptionEventPublisher: UpdatedDescriptionEventPublisher<ProductDomainEntity>,
  productService: IProductDomainService | undefined,
): Promise<ProductDomainEntity> => {
  if (!updatedDescriptionEventPublisher)
    throw new AggregateRootException(
      'El evento updatedDescriptionEventPublisher no está definido',
    );
  if (!productService)
    throw new AggregateRootException(
      'El servicio productService no está definido',
    );

  const respuesta = await productService.updateDescription(
    productId,
    productDescription,
  );
  updatedDescriptionEventPublisher.response = respuesta;
  updatedDescriptionEventPublisher.publish();
  return respuesta;
};

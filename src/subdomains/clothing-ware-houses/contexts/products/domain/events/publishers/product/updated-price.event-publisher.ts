import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';

export abstract class UpdatedPriceEventPublisher<
  Response = ProductDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'clothing-ware-houses.precio-producto-modificado',
      JSON.stringify(this.response),
    );
  }
}

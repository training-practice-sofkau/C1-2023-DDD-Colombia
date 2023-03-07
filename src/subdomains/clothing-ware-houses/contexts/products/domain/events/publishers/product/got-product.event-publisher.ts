import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProductDomainEntity } from '../../../entities/product/product.domain-entity';

export abstract class GotProductEventPublisher<
  Response = ProductDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'clothing-ware-houses.producto-obtenido',
      JSON.stringify(this.response),
    );
  }
}

import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { InventoryDomainEntity } from '../../../entities/inventory/inventory.domain-entity';

export abstract class UpdatedMiniumQuantityRequiredEventPublisher<
  Response = InventoryDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'clothing-ware-houses.cantidad-minima-requerida-modificada',
      JSON.stringify(this.response),
    );
  }
}

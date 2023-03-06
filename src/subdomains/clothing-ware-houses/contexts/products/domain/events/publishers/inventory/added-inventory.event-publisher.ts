import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { InventoryDomainEntity } from '../../../entities/inventory/inventory.domain-entity';
export abstract class AddedInventoryEventPublisher<
  Response = InventoryDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'clothing-ware-houses.inventario-registrado',
      JSON.stringify(this.response),
    );
  }
}

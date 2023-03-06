import { EventPublisherBase } from '../../../../../../../shared/sofka/bases/event-publisher.base';
import { TeléfonoDomainEntity } from '../../entities/telefono.domain-entity';

export abstract class NumeroTelefonoModificadoEventPublisher<
  Response = TeléfonoDomainEntity,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      '__CONTEXTO__2__.numero-telefono-modificado',
      JSON.stringify(this.response),
    );
  }
}

import { EventPublisherBase } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class ApellidoDeInformacionPersonalActualizadoEventPublisher<
  Response = InformacionPersonalDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.ApellidoDeInformacionPersonalActualizado,
      JSON.stringify({ data: this.response }),
    );
  }
}

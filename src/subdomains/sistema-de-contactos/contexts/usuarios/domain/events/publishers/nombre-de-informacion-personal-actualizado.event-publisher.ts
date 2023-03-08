import { EventPublisherBase } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class NombreDeInformacionPersonalActualizadoEventPublisher<
  Response = InformacionPersonalDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.NombreDeInformacionPersonalActualizado,
      JSON.stringify({ data: this.response }),
    );
  }
}

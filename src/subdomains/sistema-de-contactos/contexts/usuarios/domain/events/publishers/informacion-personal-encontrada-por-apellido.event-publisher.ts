import { EventPublisherBase } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class InformacionPersonalEncontradaPorApellidoEventPublisher<
  Response = InformacionPersonalDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.InformacionPersonalEncontradaPorApellido,
      JSON.stringify({ data: this.response }),
    );
  }
}

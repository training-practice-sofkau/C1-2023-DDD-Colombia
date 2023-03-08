import { EventPublisherBase } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class InformacionPersonalEncontradaPorUsuarioIdEventPublisher<
  Response = InformacionPersonalDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.InformacionPersonalEncontradaPorUsuarioId,
      JSON.stringify({ data: this.response }),
    );
  }
}

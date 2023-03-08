import { EventPublisherBase } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class InformacionPersonalEncontradaPorInformacionPersonalIdEventPublisher<
  Response = InformacionPersonalDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.InformacionPersonalEncontradaPorInformacionPersonalId,
      JSON.stringify({ data: this.response }),
    );
  }
}

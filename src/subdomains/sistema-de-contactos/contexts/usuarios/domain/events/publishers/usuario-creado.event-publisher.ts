import { EventPublisherBase } from '@sofka';
import { UsuarioDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class UsuarioCreadoEventPublisher<
  Response = UsuarioDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.UsuarioCreado,
      JSON.stringify({ data: this.response }),
    );
  }
}

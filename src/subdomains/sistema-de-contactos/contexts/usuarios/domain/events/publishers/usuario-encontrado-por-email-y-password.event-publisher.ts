import { EventPublisherBase } from '@sofka';
import { UsuarioDomainEntityBase } from '../../entities';
import { Topic } from './enums';

export abstract class UsuarioEncontradoPorEmailYPasswordEventPublisher<
  Response = UsuarioDomainEntityBase,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.UsuarioEncontradoPorEmailYPassword,
      JSON.stringify({ data: this.response }),
    );
  }
}

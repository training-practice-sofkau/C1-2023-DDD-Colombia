import { EventPublisherBase } from '@sofka';
import { Topic } from './enums';

export abstract class UsuarioBorradoEventPublisher<
  Response = boolean,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.UsuarioBorrado,
      JSON.stringify({ data: this.response }),
    );
  }
}

import { EventPublisherBase } from '@sofka';
import { Topic } from './enums';

export abstract class PasswordDeUsuarioActualizadoEventPublisher<
  Response = boolean,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.PasswordDeUsuarioActualizado,
      JSON.stringify({ data: this.response }),
    );
  }
}

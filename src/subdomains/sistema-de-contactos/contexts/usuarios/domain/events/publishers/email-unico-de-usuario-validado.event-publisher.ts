import { EventPublisherBase } from '@sofka';
import { Topic } from './enums';

export abstract class EmailUnicoDeUsuarioValidadoEventPublisher<
  Response = boolean,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.EmailUnicoValidado,
      JSON.stringify({ data: this.response }),
    );
  }
}

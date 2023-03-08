import { EventPublisherBase } from '@sofka';
import { Topic } from './enums';

export abstract class InformacionPersonalBorradaEventPublisher<
  Response = boolean,
> extends EventPublisherBase<Response> {
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      Topic.InformacionPersonalBorrada,
      JSON.stringify({ data: this.response }),
    );
  }
}

import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedEnviromentEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedEnviromentEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof UpdatedEnviromentEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-enviroment',
      JSON.stringify(this.response),
    );
  }
}

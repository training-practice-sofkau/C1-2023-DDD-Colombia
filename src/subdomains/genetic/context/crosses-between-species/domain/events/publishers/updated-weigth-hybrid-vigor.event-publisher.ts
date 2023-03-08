import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedWeigthHybridVigorEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedWeigthHybridVigorEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>}  respuesta del brocker
   * @memberof UpdatedWeigthHybridVigorEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-weigth-hybrid-vigor',
      JSON.stringify(this.response),
    );
  }
}

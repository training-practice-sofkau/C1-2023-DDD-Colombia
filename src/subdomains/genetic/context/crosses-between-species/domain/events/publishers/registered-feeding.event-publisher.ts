import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredFeedingEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredFeedingEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return   {Promise<Result>} respuesta del brocker
   * @memberof RegisteredFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-feeding',
      JSON.stringify(this.response),
    );
  }
}

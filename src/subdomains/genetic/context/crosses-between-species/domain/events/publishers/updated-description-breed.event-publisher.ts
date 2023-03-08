import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdateDescriptionBreedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedDescriptionBreedEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof UpdatedDescriptionBreedEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-description-breed',
      JSON.stringify(this.response),
    );
  }
}

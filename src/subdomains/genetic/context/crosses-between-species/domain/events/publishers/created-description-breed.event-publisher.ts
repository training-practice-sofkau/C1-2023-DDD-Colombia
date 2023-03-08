import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class CreatedDescriptionBreedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class CreatedDescriptionBreedEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof CreatedDescriptionBreedEventPublisher
   */
  publis<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.created-description-breed',
      JSON.stringify(this.response),
    );
  }
}

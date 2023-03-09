import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { BreedDomainEntity } from '../../entities/breed.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class CreatedDescriptionFeedingEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class CreatedDescriptionFeedingEventPublisher<
  Response = BreedDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   * description metodo para publicar el
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof CreatedDescriptionFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.created-description-feeding',
      JSON.stringify(this.response),
    );
  }
}

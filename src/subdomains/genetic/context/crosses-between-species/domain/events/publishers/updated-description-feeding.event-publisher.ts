import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { FeedingDomainEntity } from '../../entities/feeding.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedDescriptionFeedingEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedDescriptionFeedingEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof UpdatedDescriptionFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-description-feeding',
      JSON.stringify(this.response),
    );
  }
}

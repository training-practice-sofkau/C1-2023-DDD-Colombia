import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { FeedingDomainEntity } from '../../entities/feeding.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedFoodComponentFeedingEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedFoodComponentFeedingEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return   {Promise<Result>} respuesta del brocker
   * @memberof UpdatedFoodComponentFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-food-component-feeding',
      JSON.stringify(this.response),
    );
  }
}

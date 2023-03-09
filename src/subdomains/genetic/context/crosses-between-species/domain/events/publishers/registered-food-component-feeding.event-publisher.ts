import { FeedingDomainEntity } from './../../entities/feeding.domain';
import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredFoodComponentFeedingEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredFoodComponentFeedingEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return   {Promise<Result>} respuesta del brocker
   * @memberof RegisteredFoodComponentFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-food-component-feeding',
      JSON.stringify(this.response),
    );
  }
}

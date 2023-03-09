import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { FeedingDomainEntity } from '../../entities/feeding.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedFoodPermitedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedFoodPermitedEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof UpdatedFoodPermitedEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-food-permited',
      JSON.stringify(this.response),
    );
  }
}

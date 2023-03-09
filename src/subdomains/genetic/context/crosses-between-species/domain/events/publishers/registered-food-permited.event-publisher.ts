import { FeedingDomainEntity } from './../../entities/feeding.domain';
import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredFoodPermitedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredFoodPermitedEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof RegisteredFoodPermitedEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-food-permited',
      JSON.stringify(this.response),
    );
  }
}

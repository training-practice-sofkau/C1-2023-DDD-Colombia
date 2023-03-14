import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { FeedingDomainEntity } from '../../entities/feeding.domain';

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
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return   {Promise<Result>} respuesta del brocker
   * @memberof UpdatedFeedingEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-feeding',
      JSON.stringify(this.response),
    );
  }
}

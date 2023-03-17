import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { FeedingDomainEntity } from '../../entities/feeding.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class GotFeedingByIdEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class GotFeedingByIdEventPublisher<
  Response = FeedingDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof GotFeedingByIdEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.got-feeding-by-id',
      JSON.stringify(this.response),
    );
  }
}

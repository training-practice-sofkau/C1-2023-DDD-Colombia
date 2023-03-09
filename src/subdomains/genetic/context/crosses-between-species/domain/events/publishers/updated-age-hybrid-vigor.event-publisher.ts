import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { HybridVigorDomainEntity } from '../../entities/hybrid-vigor.domain-entity';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedAgeHybridVigorEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedAgeHybridVigorEventPublisher<
  Response = HybridVigorDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof UpdatedAgeHybridVigorEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-age-hybrid-vigor',
      JSON.stringify(this.response),
    );
  }
}

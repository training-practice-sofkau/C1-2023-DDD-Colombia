import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { HybridVigorDomainEntity } from '../../entities/hybrid-vigor.domain-entity';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredHybridVigorEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredHybridVigorEventPublisher<
  Response = HybridVigorDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof RegisteredHybridVigorEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-hybrid-vigor',
      JSON.stringify(this.response),
    );
  }
}

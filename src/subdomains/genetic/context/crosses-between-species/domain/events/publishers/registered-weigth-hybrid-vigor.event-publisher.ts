import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { HybridVigorDomainEntity } from '../../entities/hybrid-vigor.domain-entity';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredWeigthHybridVigorEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredWeigthHybridVigorEventPublisher<
  Response = HybridVigorDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof RegisteredWeigthHybridVigorEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-weigth-hybrid-vigor',
      JSON.stringify(this.response),
    );
  }
}

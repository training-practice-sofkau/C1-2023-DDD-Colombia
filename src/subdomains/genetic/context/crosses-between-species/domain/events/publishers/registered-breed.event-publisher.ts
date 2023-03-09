import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { BreedDomainEntity } from '../../entities/breed.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class RegisteredBreedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class RegisteredBreedEventPublisher<
  Response = BreedDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof RegisteredBreedEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.registered-breed',
      JSON.stringify(this.response),
    );
  }
}

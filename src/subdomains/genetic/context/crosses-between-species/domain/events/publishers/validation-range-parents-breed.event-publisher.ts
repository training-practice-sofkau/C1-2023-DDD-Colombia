import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { BreedDomainEntity } from '../../entities/breed.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class ValidationRangeParentsBreedEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class ValidationRangeParentsBreedEventPublisher<
  Response = BreedDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return  {Promise<Result>} respuesta del brocker
   * @memberof ValidationRangeParentsBreedEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.validation-range-parents-breed',
      JSON.stringify(this.response),
    );
  }
}

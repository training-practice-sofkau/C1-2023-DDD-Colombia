import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { BreedDomainEntity } from '../../entities/breed.domain';

/**
 *
 *
 * @export
 * @abstract
 * @class UpdatedFoodComponentEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedFoodComponentBreedEventPublisher<
  Response = BreedDomainEntity,
> extends EventPublisherBase<Response> {
  /**
   *
   *
   * @template Result tipo de respuesta
   * @return   {Promise<Result>} respuesta del brocker
   * @memberof UpdatedFoodComponentEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.updated-food-component-breed',
      JSON.stringify(this.response),
    );
  }
}

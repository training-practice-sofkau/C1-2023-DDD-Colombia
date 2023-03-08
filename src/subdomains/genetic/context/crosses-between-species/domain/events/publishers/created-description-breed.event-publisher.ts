import { EventPublisherBase } from '../../../../../../../shared/sofka/bases/event-publisher.base';

/**
 * descripcion ....
 *
 * @export
 * @abstract
 * @class CreatedDescriptionEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class CreatedDescriptionEventPublisher<
  Response,
> extends EventPublisherBase<Response> {
  /**
   * description metodo para publicar el
   *
   * @template Result Tipo de respuesta
   * @return {Promise<Result>} Respuesta del brocker
   * @memberof CreatedDescriptionEventPublisher
   */
  publish<Result = any>(): Promise<Result> {
    return this.emit(
      'crosses-between-species.created-description',
      JSON.stringify(this.response),
    );
  }
}

import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { UsuarioCreadoEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const CrearUsuarioHelper = async (
  entity: UsuarioDomainEntityBase,
  service?: IUsuarioDomainService,
  event?: UsuarioCreadoEventPublisher,
): Promise<UsuarioDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'IUsuarioDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'UsuarioCreadoEventPublisher no se encuentra definido',
    );

  event.response = await service.crearUsuario(entity);
  event.publish();
  return event.response;
};

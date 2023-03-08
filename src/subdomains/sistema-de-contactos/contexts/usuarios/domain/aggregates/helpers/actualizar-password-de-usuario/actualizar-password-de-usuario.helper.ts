import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { PasswordDeUsuarioActualizadoEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const ActualizarPasswordDeUsuarioHelper = async (
  id: string,
  entity: UsuarioDomainEntityBase,
  service?: IUsuarioDomainService,
  event?: PasswordDeUsuarioActualizadoEventPublisher,
): Promise<boolean> => {
  if (!service)
    throw new AggregateRootException(
      'IUsuarioDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'EmailDeUsuarioActualizadoEventPublisher no se encuentra definido',
    );

  event.response = await service.actualizarPasswordDeUsuario(id, entity);
  event.publish();
  return event.response;
};

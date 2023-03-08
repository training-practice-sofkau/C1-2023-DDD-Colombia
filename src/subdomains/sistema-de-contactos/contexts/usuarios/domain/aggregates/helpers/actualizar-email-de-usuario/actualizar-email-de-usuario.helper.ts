import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { EmailDeUsuarioActualizadoEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const ActualizarEmailDeUsuarioHelper = async (
  id: string,
  entity: UsuarioDomainEntityBase,
  service?: IUsuarioDomainService,
  event?: EmailDeUsuarioActualizadoEventPublisher,
): Promise<UsuarioDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'IUsuarioDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'EmailDeUsuarioActualizadoEventPublisher no se encuentra definido',
    );

  event.response = await service.actualizarEmailDeUsuario(id, entity);
  event.publish();
  return event.response;
};

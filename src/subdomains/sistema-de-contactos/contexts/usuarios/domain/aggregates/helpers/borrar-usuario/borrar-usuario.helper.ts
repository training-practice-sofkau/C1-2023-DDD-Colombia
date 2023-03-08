import { AggregateRootException } from '@sofka';
import { UsuarioBorradoEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const BorrarUsuarioHelper = async (
  id: string,
  service?: IUsuarioDomainService,
  event?: UsuarioBorradoEventPublisher,
): Promise<boolean> => {
  if (!service)
    throw new AggregateRootException(
      'IUsuarioDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'UsuarioBorradoEventPublisher no se encuentra definido',
    );

  event.response = await service.borrarUsuario(id);
  event.publish();
  return event.response;
};

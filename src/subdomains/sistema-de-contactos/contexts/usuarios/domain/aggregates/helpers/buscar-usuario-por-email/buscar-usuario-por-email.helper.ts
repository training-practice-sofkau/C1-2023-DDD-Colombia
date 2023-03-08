import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { UsuarioEncontradoPorEmailEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const BuscarUsuarioPorEmailHelper = async (
  email: string,
  service?: IUsuarioDomainService,
  event?: UsuarioEncontradoPorEmailEventPublisher,
): Promise<UsuarioDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'UsuarioEncontradoPorEmailEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarUsuarioPorEmail(email);
  event.publish();
  return event.response;
};

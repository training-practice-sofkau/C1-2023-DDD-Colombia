import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { UsuarioEncontradoPorUsuarioIdEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const BuscarUsuarioPorUsuarioIDHelper = async (
  id: string,
  service?: IUsuarioDomainService,
  event?: UsuarioEncontradoPorUsuarioIdEventPublisher,
): Promise<UsuarioDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'UsuarioEncontradoPorUsuarioIdEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarUsuarioPorUsuarioID(id);
  event.publish();
  return event.response;
};

import { AggregateRootException } from '@sofka';
import { UsuarioDomainEntityBase } from '../../../entities';
import { UsuarioEncontradoPorEmailYPasswordEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const BuscarUsuarioPorEmailYPasswordHelper = async (
  email: string,
  password: string,
  service?: IUsuarioDomainService,
  event?: UsuarioEncontradoPorEmailYPasswordEventPublisher,
): Promise<UsuarioDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'UsuarioEncontradoPorEmailYPasswordEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarUsuarioPorEmailYPassword(
    email,
    password,
  );
  event.publish();
  return event.response;
};

import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalEncontradaPorApellidoEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const BuscarInformacionPersonalPorApellidoHelper = async (
  apellido: string,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalEncontradaPorApellidoEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalEncontradaPorApellidoEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarInformacionPersonalPorApellido(apellido);
  event.publish();
  return event.response;
};

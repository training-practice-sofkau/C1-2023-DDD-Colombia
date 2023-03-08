import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalEncontradaPorNombreEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const BuscarInformacionPersonalPorNombreHelper = async (
  nombre: string,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalEncontradaPorNombreEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalEncontradaPorNombreEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarInformacionPersonalPorNombre(nombre);
  event.publish();
  return event.response;
};

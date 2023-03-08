import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalEncontradaPorInformacionPersonalIdEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const BuscarInformacionPersonalPorInformacionPersonalIDHelper = async (
  id: string,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalEncontradaPorInformacionPersonalIdEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalEncontradaPorInformacionPersonalIdEventPublisher no se encuentra definido',
    );

  event.response =
    await service.buscarInformacionPersonalPorInformacionPersonalID(id);
  event.publish();
  return event.response;
};

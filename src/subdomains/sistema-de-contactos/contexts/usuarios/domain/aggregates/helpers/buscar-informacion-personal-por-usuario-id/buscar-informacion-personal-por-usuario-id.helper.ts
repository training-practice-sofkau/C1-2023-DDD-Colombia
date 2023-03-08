import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalEncontradaPorUsuarioIdEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const BuscarInformacionPersonalPorUsuarioIDHelper = async (
  id: string,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalEncontradaPorUsuarioIdEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalEncontradaPorUsuarioIdEventPublisher no se encuentra definido',
    );

  event.response = await service.buscarInformacionPersonalPorUsuarioID(id);
  event.publish();
  return event.response;
};

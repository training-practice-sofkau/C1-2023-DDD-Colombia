import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { InformacionPersonalCreadaEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const CrearInformacionPersonalHelper = async (
  entity: InformacionPersonalDomainEntityBase,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalCreadaEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalCreadaEventPublisher no se encuentra definido',
    );

  event.response = await service.crearInformacionPersonal(entity);
  event.publish();
  return event.response;
};

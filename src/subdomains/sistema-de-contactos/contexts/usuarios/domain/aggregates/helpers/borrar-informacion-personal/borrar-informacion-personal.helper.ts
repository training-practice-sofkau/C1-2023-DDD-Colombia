import { AggregateRootException } from '@sofka';
import { InformacionPersonalBorradaEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const BorrarInformacionPersonalHelper = async (
  id: string,
  service?: IInformacionPersonalDomainService,
  event?: InformacionPersonalBorradaEventPublisher,
): Promise<boolean> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'InformacionPersonalBorradaEventPublisher no se encuentra definido',
    );

  event.response = await service.borrarInformacionPersonal(id);
  event.publish();
  return event.response;
};

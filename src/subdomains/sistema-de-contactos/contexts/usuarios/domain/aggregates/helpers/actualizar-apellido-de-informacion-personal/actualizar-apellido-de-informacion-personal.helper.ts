import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { ApellidoDeInformacionPersonalActualizadoEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const ActualizarApellidoDeInformacionPersonalHelper = async (
  id: string,
  entity: InformacionPersonalDomainEntityBase,
  service?: IInformacionPersonalDomainService,
  event?: ApellidoDeInformacionPersonalActualizadoEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'ApellidoDeInformacionPersonalActualizadoEventPublisher no se encuentra definido',
    );

  event.response = await service.actualizarApellidoDeInformacionPersonal(
    id,
    entity,
  );
  event.publish();
  return event.response;
};

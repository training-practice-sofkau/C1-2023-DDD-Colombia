import { AggregateRootException } from '@sofka';
import { InformacionPersonalDomainEntityBase } from '../../../entities';
import { NombreDeInformacionPersonalActualizadoEventPublisher } from '../../../events';
import { IInformacionPersonalDomainService } from '../../../services';

export const ActualizarNombreDeInformacionPersonalHelper = async (
  id: string,
  entity: InformacionPersonalDomainEntityBase,
  service?: IInformacionPersonalDomainService,
  event?: NombreDeInformacionPersonalActualizadoEventPublisher,
): Promise<InformacionPersonalDomainEntityBase> => {
  if (!service)
    throw new AggregateRootException(
      'InformacionPersonalService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'NombreDeInformacionPersonalActualizadoEventPublisher no se encuentra definido',
    );

  event.response = await service.actualizarNombreDeInformacionPersonal(
    id,
    entity,
  );
  event.publish();
  return event.response;
};

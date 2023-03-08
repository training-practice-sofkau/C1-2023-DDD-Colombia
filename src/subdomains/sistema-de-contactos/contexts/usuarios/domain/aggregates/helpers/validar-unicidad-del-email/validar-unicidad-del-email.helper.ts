import { AggregateRootException } from '@sofka';
import { EmailUnicoDeUsuarioValidadoEventPublisher } from '../../../events';
import { IUsuarioDomainService } from '../../../services';

export const ValidarUnicidadDelEmailHelper = async (
  email: string,
  service?: IUsuarioDomainService,
  event?: EmailUnicoDeUsuarioValidadoEventPublisher,
): Promise<boolean> => {
  if (!service)
    throw new AggregateRootException(
      'IUsuarioDomainService no se encuentra definido',
    );

  if (!event)
    throw new AggregateRootException(
      'EmailUnicoDeUsuarioValidadoEventPublisher no se encuentra definido',
    );

  event.response = await service.validarUnicidadDelEmail(email);
  event.publish();
  return event.response;
};

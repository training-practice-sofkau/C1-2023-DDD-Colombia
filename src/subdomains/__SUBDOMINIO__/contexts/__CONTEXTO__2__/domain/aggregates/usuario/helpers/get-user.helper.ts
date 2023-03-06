import { AggregateRootException } from 'src/shared/sofka';
import { TeléfonoDomainEntity } from '../../../entities/telefono.domain-entity';
import { UsuarioDomainEntity } from '../../../entities/usuario.domain-entity';
import { NumeroTelefonoModificadoEventPublisher } from '../../../events/publishers/numero-telefono-modificado.event-publisher';
import { ITelefonoDomainService } from '../../../services/telefono.domain-service';

export const GetUserHelper = async (
  userId: string,
  numTelModEvPub: NumeroTelefonoModificadoEventPublisher<TeléfonoDomainEntity>,
  telefonoService: ITelefonoDomainService | undefined,
): Promise<UsuarioDomainEntity> => {
  if (!numTelModEvPub)
    throw new AggregateRootException(
      'El evento numTelModEvPub no está definido',
    );

  if (!telefonoService)
    throw new AggregateRootException(
      'El servicio telefonoService no está definido',
    );

  const respuesta = await telefonoService.getTelefono(userId);
  numTelModEvPub.response = respuesta;
  numTelModEvPub.publish();
  return respuesta;
};

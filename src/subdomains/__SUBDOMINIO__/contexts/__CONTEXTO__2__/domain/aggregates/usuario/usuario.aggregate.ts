import { UsuarioDomainEntity } from '../../entities/usuario.domain-entity';
import { NumeroTelefonoModificadoEventPublisher } from '../../events/publishers/numero-telefono-modificado.event-publisher';
import { ITelefonoDomainService } from '../../services/telefono.domain-service';
import { IUsuarioDomainService } from '../../services/usuario.domain-service';
import { GetUserHelper } from './helpers/get-user.helper';

export class UsuarioAggregateRoot
  implements ITelefonoDomainService, IUsuarioDomainService
{
  private readonly userService?: IUsuarioDomainService;
  private readonly telefonoService?: ITelefonoDomainService;
  private readonly numTelModEvPub: NumeroTelefonoModificadoEventPublisher;

  constructor({
    userService,
    telefonoService,
    numeroTelefonoModificadoEventPublisher,
  }: {
    userService?: IUsuarioDomainService;
    telefonoService?: ITelefonoDomainService;
    numeroTelefonoModificadoEventPublisher: NumeroTelefonoModificadoEventPublisher;
  }) {
    this.userService = userService;
    this.telefonoService = telefonoService;
    this.numTelModEvPub = numeroTelefonoModificadoEventPublisher;
  }

  getTelefono(telefonoId: string): Promise<string> {
    throw new Error('Method not implemented.');
  }

  getUser(userId: string): Promise<UsuarioDomainEntity> {
    return GetUserHelper(userId, this.numTelModEvPub, this.telefonoService);
  }

  getAllUsers(): Promise<UsuarioDomainEntity[]> {
    throw new Error('Method not implemented.');
  }
}

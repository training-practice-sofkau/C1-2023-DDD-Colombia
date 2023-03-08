import {
  EventPublisherBase,
  IUseCase,
  ValueObjectErrorHandler,
  ValueObjectException,
} from '@sofka';
import {
  InformacionPersonalDomainEntityBase,
  IRegistrarUnUsuarioCommand,
  IRegistrarUnUsuarioResponse,
  IUsuarioDomainService,
  Topic,
  UsuarioAggregateRoot,
  UsuarioCreadoEventPublisher,
  UsuarioDomainEntityBase,
} from '@usuarios/domain';
import {
  ApellidoValueObject,
  NombreValueObject,
} from '@usuarios/domain/value-object/informacion-personal';
import {
  EmailValueObject,
  PasswordValueObject,
} from '@usuarios/domain/value-object/usuario';
export class RegistrarUnUsuarioUseCase
  extends ValueObjectErrorHandler
  implements IUseCase<IRegistrarUnUsuarioCommand, IRegistrarUnUsuarioResponse>
{
  private readonly aggregateRoot: UsuarioAggregateRoot;

  constructor(
    private readonly usuarioService: IUsuarioDomainService,
    private readonly usuarioCreadoEventPublisher: UsuarioCreadoEventPublisher,
  ) {
    super();
    const events = new Map<Topic, EventPublisherBase<any>>();
    events.set(Topic.UsuarioCreado, this.usuarioCreadoEventPublisher);
    this.aggregateRoot = new UsuarioAggregateRoot({
      usuarioService: this.usuarioService,
      events,
    });
  }

  async execute(
    command: IRegistrarUnUsuarioCommand,
  ): Promise<IRegistrarUnUsuarioResponse> {
    // Creación de objectos de valor
    const email = new EmailValueObject(command.email);
    const password = new PasswordValueObject(command.password);
    const nombre = new NombreValueObject(command.nombre);
    const apellido = new ApellidoValueObject(command.apellido);

    // Recopilando errores
    if (email.hasErrors() === true) this.setErrors(email.getErrors());
    if (password.hasErrors() === true) this.setErrors(password.getErrors());
    if (nombre.hasErrors() === true) this.setErrors(nombre.getErrors());
    if (apellido.hasErrors() === true) this.setErrors(apellido.getErrors());

    // Validando errores
    if (this.hasErrors() === true)
      throw new ValueObjectException(
        'Hay algunos errores en el comando "IRegistrarUnUsuarioCommand"',
        this.getErrors(),
      );

    // Ejecución de la lógica del caso de uso
    const entity = new UsuarioDomainEntityBase({
      email: email.valueOf(),
      password: password.valueOf(),
      informacionPersonal: new InformacionPersonalDomainEntityBase({
        nombre: nombre.valueOf(),
        apellido: apellido.valueOf(),
      }),
    });
    const result = await this.aggregateRoot.crearUsuario(entity);

    // Retornando la respuesta
    return { data: result };
  }
}

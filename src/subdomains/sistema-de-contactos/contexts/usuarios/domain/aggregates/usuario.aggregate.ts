import { EventPublisherBase } from '@sofka';
import {
  InformacionPersonalDomainEntityBase,
  UsuarioDomainEntityBase,
} from '../entities';
import { Topic } from '../events';
import {
  IInformacionPersonalDomainService,
  IUsuarioDomainService,
} from '../services';
import {
  ActualizarApellidoDeInformacionPersonalHelper,
  ActualizarEmailDeUsuarioHelper,
  ActualizarNombreDeInformacionPersonalHelper,
  ActualizarPasswordDeUsuarioHelper,
  BorrarInformacionPersonalHelper,
  BorrarUsuarioHelper,
  BuscarInformacionPersonalPorApellidoHelper,
  BuscarInformacionPersonalPorInformacionPersonalIDHelper,
  BuscarInformacionPersonalPorNombreHelper,
  BuscarInformacionPersonalPorUsuarioIDHelper,
  BuscarUsuarioPorEmailHelper,
  BuscarUsuarioPorEmailYPasswordHelper,
  BuscarUsuarioPorUsuarioIDHelper,
  CrearInformacionPersonalHelper,
  CrearUsuarioHelper,
  ValidarUnicidadDelEmailHelper,
} from './helpers';

export class UsuarioAggregateRoot
  implements IInformacionPersonalDomainService, IUsuarioDomainService
{
  private readonly usuarioService?: IUsuarioDomainService;
  private readonly informacionPersonalService?: IInformacionPersonalDomainService;
  private readonly events: Map<Topic, EventPublisherBase<any>>;

  constructor({
    usuarioService,
    informacionPersonalService,
    events,
  }: {
    usuarioService?: IUsuarioDomainService;
    informacionPersonalService?: IInformacionPersonalDomainService;
    events?: Map<Topic, any>;
  }) {
    this.usuarioService = usuarioService;
    this.informacionPersonalService = informacionPersonalService;
    this.events = events ?? new Map<Topic, EventPublisherBase<any>>();
  }

  crearInformacionPersonal(
    entity: InformacionPersonalDomainEntityBase,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return CrearInformacionPersonalHelper(
      entity,
      this.informacionPersonalService,
      this.events.get(Topic.InformacionPersonalCreada),
    );
  }

  actualizarNombreDeInformacionPersonal(
    informacionPersonalId: string,
    entity: InformacionPersonalDomainEntityBase,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return ActualizarNombreDeInformacionPersonalHelper(
      informacionPersonalId,
      entity,
      this.informacionPersonalService,
      this.events.get(Topic.NombreDeInformacionPersonalActualizado),
    );
  }

  actualizarApellidoDeInformacionPersonal(
    informacionPersonalId: string,
    entity: InformacionPersonalDomainEntityBase,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return ActualizarApellidoDeInformacionPersonalHelper(
      informacionPersonalId,
      entity,
      this.informacionPersonalService,
      this.events.get(Topic.ApellidoDeInformacionPersonalActualizado),
    );
  }

  borrarInformacionPersonal(informacionPersonalId: string): Promise<boolean> {
    return BorrarInformacionPersonalHelper(
      informacionPersonalId,
      this.informacionPersonalService,
      this.events.get(Topic.InformacionPersonalBorrada),
    );
  }

  buscarInformacionPersonalPorInformacionPersonalID(
    informacionPersonalId: string,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return BuscarInformacionPersonalPorInformacionPersonalIDHelper(
      informacionPersonalId,
      this.informacionPersonalService,
      this.events.get(
        Topic.InformacionPersonalEncontradaPorInformacionPersonalId,
      ),
    );
  }

  buscarInformacionPersonalPorNombre(
    nombre: string,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return BuscarInformacionPersonalPorNombreHelper(
      nombre,
      this.informacionPersonalService,
      this.events.get(Topic.InformacionPersonalEncontradaPorNombre),
    );
  }

  buscarInformacionPersonalPorApellido(
    apellido: string,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return BuscarInformacionPersonalPorApellidoHelper(
      apellido,
      this.informacionPersonalService,
      this.events.get(Topic.InformacionPersonalEncontradaPorApellido),
    );
  }

  buscarInformacionPersonalPorUsuarioID(
    usuarioId: string,
  ): Promise<InformacionPersonalDomainEntityBase> {
    return BuscarInformacionPersonalPorUsuarioIDHelper(
      usuarioId,
      this.informacionPersonalService,
      this.events.get(Topic.InformacionPersonalEncontradaPorUsuarioId),
    );
  }

  crearUsuario(
    entity: UsuarioDomainEntityBase,
  ): Promise<UsuarioDomainEntityBase> {
    return CrearUsuarioHelper(
      entity,
      this.usuarioService,
      this.events.get(Topic.UsuarioCreado),
    );
  }

  actualizarEmailDeUsuario(
    usuarioId: string,
    entity: UsuarioDomainEntityBase,
  ): Promise<UsuarioDomainEntityBase> {
    return ActualizarEmailDeUsuarioHelper(
      usuarioId,
      entity,
      this.usuarioService,
      this.events.get(Topic.EmailDeUsuarioActualizado),
    );
  }

  actualizarPasswordDeUsuario(
    usuarioId: string,
    entity: UsuarioDomainEntityBase,
  ): Promise<boolean> {
    return ActualizarPasswordDeUsuarioHelper(
      usuarioId,
      entity,
      this.usuarioService,
      this.events.get(Topic.PasswordDeUsuarioActualizado),
    );
  }

  borrarUsuario(usuarioId: string): Promise<boolean> {
    return BorrarUsuarioHelper(
      usuarioId,
      this.usuarioService,
      this.events.get(Topic.UsuarioBorrado),
    );
  }

  buscarUsuarioPorUsuarioID(
    usuarioId: string,
  ): Promise<UsuarioDomainEntityBase> {
    return BuscarUsuarioPorUsuarioIDHelper(
      usuarioId,
      this.usuarioService,
      this.events.get(Topic.UsuarioEncontradoPorUsuarioId),
    );
  }

  buscarUsuarioPorEmail(email: string): Promise<UsuarioDomainEntityBase> {
    return BuscarUsuarioPorEmailHelper(
      email,
      this.usuarioService,
      this.events.get(Topic.UsuarioEncontradoPorEmail),
    );
  }

  buscarUsuarioPorEmailYPassword(
    email: string,
    password: string,
  ): Promise<UsuarioDomainEntityBase> {
    return BuscarUsuarioPorEmailYPasswordHelper(
      email,
      password,
      this.usuarioService,
      this.events.get(Topic.UsuarioEncontradoPorEmailYPassword),
    );
  }

  validarUnicidadDelEmail(email: string): Promise<boolean> {
    return ValidarUnicidadDelEmailHelper(
      email,
      this.usuarioService,
      this.events.get(Topic.EmailUnicoValidado),
    );
  }
}

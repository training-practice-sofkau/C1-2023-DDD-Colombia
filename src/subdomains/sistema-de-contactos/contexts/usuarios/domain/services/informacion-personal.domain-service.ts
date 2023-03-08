import { InformacionPersonalDomainEntityBase } from '../entities';

export interface IInformacionPersonalDomainService<
  Entity extends InformacionPersonalDomainEntityBase = InformacionPersonalDomainEntityBase,
> {
  crearInformacionPersonal(entity: Entity): Promise<Entity>;
  actualizarNombreDeInformacionPersonal(
    informacionPersonalId: string,
    entity: Entity,
  ): Promise<Entity>;
  actualizarApellidoDeInformacionPersonal(
    informacionPersonalId: string,
    entity: Entity,
  ): Promise<Entity>;
  borrarInformacionPersonal(informacionPersonalId: string): Promise<boolean>;
  buscarInformacionPersonalPorInformacionPersonalID(
    informacionPersonalId: string,
  ): Promise<Entity>;
  buscarInformacionPersonalPorNombre(nombre: string): Promise<Entity>;
  buscarInformacionPersonalPorApellido(apellido: string): Promise<Entity>;
  buscarInformacionPersonalPorUsuarioID(usuarioId: string): Promise<Entity>;
}

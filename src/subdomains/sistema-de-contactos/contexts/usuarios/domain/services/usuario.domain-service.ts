import { UsuarioDomainEntityBase } from '../entities';

export interface IUsuarioDomainService<
  Entity extends UsuarioDomainEntityBase = UsuarioDomainEntityBase,
> {
  crearUsuario(entity: Entity): Promise<Entity>;
  actualizarEmailDeUsuario(usuarioId: string, entity: Entity): Promise<Entity>;
  actualizarPasswordDeUsuario(
    usuarioId: string,
    entity: Entity,
  ): Promise<boolean>;
  borrarUsuario(usuarioId: string): Promise<boolean>;
  buscarUsuarioPorUsuarioID(usuarioId: string): Promise<Entity>;
  buscarUsuarioPorEmail(email: string): Promise<Entity>;
  buscarUsuarioPorEmailYPassword(
    email: string,
    password: string,
  ): Promise<Entity>;
  validarUnicidadDelEmail(email: string): Promise<boolean>;
}
